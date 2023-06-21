package com.app.conroller;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import com.app.dto.ClaimByIdDTO;
import com.app.exception.BadRequestException;
import com.app.exception.ResourceNotFoundException;
import com.app.model.model.Claim;
import com.app.model.model.Person;
import com.app.model.model.PersonPolicy;
import com.app.model.model.Policy;
import com.app.repository.ClaimRepository;
import com.app.repository.PersonPolicyRepository;
import com.app.repository.PersonRepository;
import com.app.repository.PolicyRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.hibernate.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.app.configuration.WebPath.API_VERSION_1;

@RestController
@RequestMapping(API_VERSION_1)
@CrossOrigin(origins = "localhost:4200")
@Tag(name = "Claims operations", description = "Basic CRUD operations related to claims")

public class ClaimController {

    @Autowired
    private ClaimRepository claimRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private  PersonPolicyRepository personPolicyRepository;

    @Autowired
    private PolicyRepository policyRepository;

    // get all claims
    @GetMapping("/claims")
    public ResponseEntity getAllClaims(){
        try {
          List<Claim> listClaims = claimRepository.findAll();
          return  ResponseEntity.ok().body(listClaims);
        }
        catch (Error error){
          return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }

    }

    // create claim rest api
    @PostMapping("/claim")
    public ResponseEntity createClaim(@RequestBody Claim claim) throws Exception {
        try {
            long claimLast = claimRepository.findLastClaimNumber();
            claim.setClaimNumber(claimLast+1);

            claimRepository.save(claim);

            return new ResponseEntity<>("Претенцията е успешно заявена",HttpStatus.OK);
        }
        catch (Exception error){
            return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }

    }

    // get claim by id rest api
    @GetMapping("/claim/{id}")
    public ResponseEntity getClaimById(@PathVariable Long id) throws Exception {
        Claim claim = claimRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Claim not exist with id :" + id));

        try {
            ClaimByIdDTO claimData = new ClaimByIdDTO();
            claimData.setClaim(claim);

            BigDecimal newLimit = null;
            try{
            Policy policy = personPolicyRepository.findByInsuredId(personRepository.findByEgn(claim.getEgn())).getPolicyId();

                if (claim.getCategory().equalsIgnoreCase("Дентална помощ")) {
                    newLimit = policy.getDentalLimit();
                } else if (claim.getCategory().equalsIgnoreCase("Болнична помощ")) {
                    newLimit = policy.getHospitalLimit();
                } else if (claim.getCategory().equalsIgnoreCase("Здравни стоки")) {
                    newLimit = policy.getHealthGoodsLimit();
                } else if (claim.getCategory().equalsIgnoreCase("Извънболнична помощ")) {
                    newLimit = policy.getOutOfHospitalLimit();
                }

                claimData.setMaxLimitValue(newLimit);
                return ResponseEntity.ok().body(claimData);

            }
            catch (Exception error){
                claimRepository.deleteById(id);
                return ResponseEntity.badRequest().body("Полицата на застрахованото лице е изтекла. Претенцията не може да бъде разгледана");
            }
        }
        catch (Exception error){
            return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }
    }

    // get claim by user
    @GetMapping("/claims-user/{egn}")
    public ResponseEntity getClaimsByEgn(@PathVariable String egn) {
        try {
            return new ResponseEntity<>(claimRepository.findAllByEgn(egn), HttpStatus.OK);
        }
        catch (Exception error){
            return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }
    }

    // update claim status rest api
    @PutMapping("/claim-status/{id}")
    public ResponseEntity updateClaimStatus(@PathVariable Long id, @RequestBody Claim claimDetails) {
            Claim claim = claimRepository.findById(id).orElseThrow(()
                    -> new ResourceNotFoundException("Claim not exist with id :" + id));

        try {
            claim.setPaidDate(claimDetails.getPaidDate());
            claim.setPaidSum(claimDetails.getPaidSum());
            claim.setDescription(claimDetails.getDescription());

            if (claimDetails.getPaidSum() != null) {
                Policy policy = personPolicyRepository.findByInsuredId(personRepository.findByEgn(claim.getEgn())).getPolicyId();

                    if (claim.getCategory().equalsIgnoreCase("Дентална помощ")) {
                        BigDecimal result = policy.getDentalLimit().subtract(claimDetails.getPaidSum());
                        policy.setDentalLimit(result);
                    } else if (claim.getCategory().equalsIgnoreCase("Болнична помощ")) {
                        BigDecimal result = policy.getHospitalLimit().subtract(claimDetails.getPaidSum());
                        policy.setHospitalLimit(result);
                    } else if (claim.getCategory().equalsIgnoreCase("Здравни стоки")) {
                        BigDecimal result = policy.getHealthGoodsLimit().subtract(claimDetails.getPaidSum());
                        policy.setHealthGoodsLimit(result);
                    } else if (claim.getCategory().equalsIgnoreCase("Извънболнична помощ")) {
                        BigDecimal result = policy.getOutOfHospitalLimit().subtract(claimDetails.getPaidSum());
                        policy.setOutOfHospitalLimit(result);
                    }
                    policyRepository.save(policy);
                }


            Claim updatedClaim = claimRepository.save(claim);
            return new ResponseEntity<>("Статуса на претенцията беше обновен успешно",HttpStatus.OK);
        }
        catch (Exception error){
            return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }
    }

    // check if user exists in order to file a claim
    @GetMapping("/check-user/{egn}")
    public ResponseEntity checkUser(@PathVariable String egn) {

            Person person = personRepository.findByEgn(egn);
            if(person!=null){
                return ResponseEntity.ok().body(person);
            }
            else {
            return ResponseEntity.badRequest().body("Не същесвува в базата данни потребител с такова ЕГН");
             }


    }

}

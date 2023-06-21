package com.app.conroller;

import com.app.dto.PersonPolicyDTO;
import com.app.dto.PersonPolicyReqDTO;
import com.app.model.model.Person;
import com.app.model.model.PersonPolicy;
import com.app.model.model.Policy;
import com.app.model.model.PolicyResponse;
import com.app.repository.PersonPolicyRepository;
import com.app.repository.PersonRepository;
import com.app.repository.PolicyRepository;
import com.app.service.PolicyService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Date;
import java.util.List;

import static com.app.configuration.WebPath.API_VERSION_1;

@RestController
@RequestMapping(API_VERSION_1)
@CrossOrigin(origins = "localhost:4200")
@Tag(name = "Policy operations", description = "Basic CRUD operations related to policy")
public class PolicyController {

    @Autowired
    private  PolicyService policyService;

    @Autowired
    private  PolicyRepository policyRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonPolicyRepository personPolicyRepository;

    // create claim rest api
    @PostMapping("/policy-person")
    public ResponseEntity createPolicyPerson (@RequestBody PersonPolicy policy) {
    try {
        personPolicyRepository.save(policy);
        return ResponseEntity.ok().body(policy);
    }
    catch (Exception error){
        return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }

    }

    // create claim rest api
    @PostMapping("/policy")
    public ResponseEntity createPolicy (@RequestBody PersonPolicyReqDTO policy) throws ParseException {
        Person insuredPerson = personRepository.findByEgn(policy.insured.getEgn());
        if(insuredPerson!=null) {
            Policy policyId;
            try {
                policyId = personPolicyRepository.findByInsuredId(insuredPerson).getPolicyId();
            } catch (Exception error) {
                return ResponseEntity.badRequest().body("Лицето има сключена полица за периода.");
            }

            System.out.print(policy.getPolicy().getStartDate() + " " + policyId.getEndDate() + " " + policy.getPolicy().getStartDate().before(policyId.getEndDate()));
            if (policyService.compareStartDateEndDate(policy.getPolicy().getStartDate(), policyId.getEndDate())) {
                return ResponseEntity.badRequest().body("Лицето има сключена полица за периода.");
            }
        }
          try {
                long policyNum = policyService.savePolicy(policy.policy);
                System.out.print(policyNum);
                boolean isCreatedNewUser = policyService.saveInsurerInsured(policy.insured, policy.insurer);
                System.out.print(isCreatedNewUser);

                policyService.saveConnectionPersonPolicy(policy.policy, policy.insured, policy.insurer);

                PolicyResponse response = new PolicyResponse();
                response.setPolicyNumber(policyNum);

                response.setIsNewUserCreated(isCreatedNewUser);
                System.out.print(response + " " + 1);

                return ResponseEntity.ok().body(response);
            } catch (Exception error) {
                return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
            }
    }

    // get policy by egn rest api
    @GetMapping("/policy-list/{egn}")
    public ResponseEntity getPolicyListByEgn(@PathVariable String egn) {
        try {
            long personId = policyService.getPersonEGNId(egn);
            List<PersonPolicy> policyList = personPolicyRepository.findByInsurerId(personId);
            return ResponseEntity.ok().body(policyList);
        }
        catch (Exception error){
            return ResponseEntity.badRequest().body("Нещо се обърка. Моля опитайте отново");
        }
    }

    // get titular by egn rest api
    @GetMapping("/policy-titular/{egn}")
    public Person getPolicyTitularByEgn(@PathVariable String egn) {
        Person person = personRepository.findByEgn(egn);
        return person;
    }




}

package com.app.service;

import org.springframework.stereotype.Service;

@Service
public class ClaimService {

/*
    private final ClaimRepository claimRepository;
*/

/*
    private final ClaimMapper claimMapper;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public ClaimService(ClaimRepository claimRepository, ClaimMapper claimMapper) {
        this.claimRepository = claimRepository;
        this.claimMapper = claimMapper;
    }

    public ResponseEntity saveClaim(ObjectNode claimInJson) {
        Claim claim = new Claim('1',);
        try {
            claimRepository.save(claim);
            return new ResponseEntity<>(claim, HttpStatus.OK);
        } catch (UserAuthenticationException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    public Iterable<Claim> getAllClaims() {
        return claimRepository.findAll();
    }


    public Claim getClaimById(int id) {
        return claimRepository.findById(id);
    }

    public Claim getClaimByEgn(String egn) {
        return claimRepository.findByEgn(egn);
    }*/
}

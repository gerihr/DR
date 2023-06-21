package com.app.repository;

import com.app.model.model.Person;
import com.app.model.model.PersonPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonPolicyRepository  extends JpaRepository<PersonPolicy, Long> {
   List<PersonPolicy> findByInsurerId (long id);

   PersonPolicy findByInsuredId (long id);

   PersonPolicy findByInsuredId (Person insured);
}

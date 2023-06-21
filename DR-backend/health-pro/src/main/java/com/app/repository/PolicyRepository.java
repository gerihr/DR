package com.app.repository;

import com.app.model.model.Claim;
import com.app.model.model.Person;
import com.app.model.model.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {

    Policy findByPolicyNumber(Long policyNum);

    @Query(value="select p.policy_number from health_pro.policy as p order by p.id desc limit 1", nativeQuery = true)
    long findLastPolicyNumber();

    @Transactional
    @Modifying
    @Query(value="DELETE FROM health_pro.policy p WHERE p.end_date < :date", nativeQuery = true)
    void removeOlderThan(@Param("date") Date date);

}


package com.app.repository;

import com.app.model.model.Claim;
import org.hibernate.mapping.Any;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClaimRepository extends JpaRepository<Claim, Long> {
    List<Claim> findAllByEgn( String egn);

    @Query(value="select c.claim_number from health_pro.claim as c order by c.id desc limit 1", nativeQuery = true)
    long findLastClaimNumber();
}
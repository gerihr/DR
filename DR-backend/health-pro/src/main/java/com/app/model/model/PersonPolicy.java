package com.app.model.model;

import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Data
@Entity
@Table(name = "person_policy")
public class PersonPolicy {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne
    @JoinColumn(name = "policy_id")
    private Policy policyId;

//    @ManyToOne
    @Column(name = "insurer_id")
    private Long insurerId;

    @ManyToOne
    @JoinColumn(name = "insured_id")
    private Person insuredId;


}

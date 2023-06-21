package com.app.model.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;

@Entity
@Data
@Table(name = "claim")

public class Claim {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(name = "egn")
    private String egn;

    @Column(name = "name")
    private String name;

    @Column(name = "category")
    private String category;

    @Column(name = "type")
    private String type;

    @Column(name = "sum")
    private BigDecimal sum;

    @Column(name = "iban")
    private String iban;

    @Column(name = "claim_date")
    private Date claimDate;

    @Column(name = "paid_sum")
    private BigDecimal paidSum;

    @Column(name = "paid_date")
    private Date paidDate;

    @Column(name = "description")
    private String description;


    @Column(name="claim_number")
    private long claimNumber;

    private ArrayList<Object> files;


}

package com.app.model.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "policy_number")
    private long policyNumber;

    @Column(name = "dental_limit")
    private BigDecimal dentalLimit;

    @Column(name = "hospital_limit")
    private BigDecimal hospitalLimit;

    @Column(name = "out_of_hospital_limit")
    private BigDecimal outOfHospitalLimit;

    @Column(name = "health_goods_limit")
    private BigDecimal healthGoodsLimit;

    @Column(name = "price")
    private BigDecimal price;

}

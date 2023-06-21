package com.app.dto;

import com.app.model.model.Person;
import com.app.model.model.Policy;
import lombok.Data;

@Data
public class PersonPolicyReqDTO {

    public Person insurer;

    public Person insured;

    public Policy policy;
}

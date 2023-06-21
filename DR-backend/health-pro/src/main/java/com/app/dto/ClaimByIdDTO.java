package com.app.dto;

import com.app.model.model.Claim;
import com.app.model.model.Person;
import com.app.model.model.Policy;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ClaimByIdDTO {
    public Claim claim;

    public BigDecimal maxLimitValue;

}

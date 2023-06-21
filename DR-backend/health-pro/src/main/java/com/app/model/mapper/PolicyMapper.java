package com.app.model.mapper;

import com.app.dto.PolicyDTO;

import com.app.model.model.Policy;
import org.mapstruct.Mapper;

@Mapper
public interface PolicyMapper {
    Policy policyDTOToPolicy(PolicyDTO policyDTO);

    PolicyDTO policyToPolicyDTO(Policy policy);
}

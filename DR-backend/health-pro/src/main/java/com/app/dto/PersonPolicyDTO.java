package com.app.dto;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class PersonPolicyDTO {

    @Schema(example = "0")
    private Long id;

    public Long insurerId;

    public PersonDTO insuredId;

    public PolicyDTO policyId;
}

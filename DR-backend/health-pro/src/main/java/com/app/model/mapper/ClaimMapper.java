package com.app.model.mapper;

import com.app.dto.ClaimDTO;
import com.app.model.model.Claim;
import org.mapstruct.Mapper;

@Mapper
public interface ClaimMapper {

    Claim claimDTOToClaim(ClaimDTO claimDTO);

    ClaimDTO claimToClaimDTO(Claim claim);

}
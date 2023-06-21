package com.app.model.mapper;

import com.app.dto.PersonPolicyDTO;
import com.app.model.model.PersonPolicy;
import org.mapstruct.Mapper;

@Mapper
public interface PersonPolicyMapper {
    PersonPolicy personPolicyDTOToPersonPolicy(PersonPolicyDTO personPolicyDTO);

    PersonPolicyDTO PersonPolicyToPersonPolicyDTO(PersonPolicy personPolicy);
}

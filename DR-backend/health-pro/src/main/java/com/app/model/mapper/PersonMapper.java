package com.app.model.mapper;

import com.app.dto.PersonDTO;
import com.app.model.model.Person;
import org.mapstruct.Mapper;

@Mapper
public interface PersonMapper {

    Person personDTOToPerson(PersonDTO personDTO);

    PersonDTO personToPersonDTO(Person person);

}

package com.app.dto;

import com.app.model.model.Policy;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Set;

@Data
public class PersonDTO {
    @Schema(example = "0")
    private long id;

    @Schema(example = "004915448")
    private String egn;

    @Schema(example = "Иван")
    private String firstName;

    @Schema(example = "Петков")
    private String middleName;

    @Schema(example = "Митев")
    private String lastName;

    @Schema(example = "0888873826")
    private String phoneNumber;

    @Schema(example = "ivan.p@abv.bg")
    private String email;

    @Schema(example = "ул. Кольо Ганчев")
    private String address;

    @Schema(example = "София")
    private String city;
}

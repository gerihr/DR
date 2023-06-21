package com.app.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class TypeDTO {
    @Schema(example = "0")
    private long id;

    @Schema(example = "Профилактика")
    private String type;

    @Schema(example = "1")
    private long categoryId;
}

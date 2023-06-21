package com.app.dto;

import com.app.model.model.Type;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
public class CategoryDTO {

    @Schema(example = "0")
    private long id;

    @Schema(example = "Дентална помощ")
    private String category;

    private List<Type> typeList;
}

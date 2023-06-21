package com.app.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class ClaimDTO {

    @Schema(example = "0")
    private Long id;

    @Schema(example = "0049137550")
    private String egn;

    @Schema(example = "Гери Христозова")
    private String name;

    @Schema(example = "Дентална помощ")
    private String category;

    @Schema(example = "Профилактика")
    private String type;

    @Schema(example = "150")
    private BigDecimal sum;

    @Schema(example = "")
    private String iban;

    @Schema(example = "")
    private Date claimDate;

    @Schema(example = "150")
    private BigDecimal paidSum;

    @Schema(example = "")
    private Date paidDate;

    @Schema(example = "")
    private String description;

    @Schema(example = "123456")
    private long claimNumber;

    private ArrayList<Object> files;
}

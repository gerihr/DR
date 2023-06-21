package com.app.dto;

import com.app.model.model.Person;
import com.app.model.model.Type;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Data
public class PolicyDTO {
    @Schema(example = "0")
    private long id;

    @Schema(example = "")
    private Date startDate;

    @Schema(example = "")
    private Date endDate;

    @Schema(example = "520586532")
    private long policyNumber;

    @Schema(example = "120")
    private BigDecimal dentalLimit;

    @Schema(example = "150")
    private BigDecimal hospitalLimit;

    @Schema(example = "348")
    private BigDecimal outOfHospitalLimit;

    @Schema(example = "554")
    private BigDecimal healthGoodsLimit;

    @Schema(example = "20")
    private BigDecimal price;

}

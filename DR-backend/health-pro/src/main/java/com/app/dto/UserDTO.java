package com.app.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class UserDTO {

  @Schema(example = "0")
  private Integer id;

  @Schema(example = "0049137550")
  private String idNumber;

  @Schema(example = "123456")
  private String code;

  @Schema(example = "admin")
  private String type;

  @Schema(example = "")
  private String sessionToken;
}

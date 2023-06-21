package com.app.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.Comparator;

@Data
public class CityDTO implements Comparable<CityDTO> {

	@Schema(example = "Panagyurishte")
	private String  city;

	@Override
	public int compareTo(CityDTO o) {
		return o == null ? 1 : Comparator.comparing(CityDTO::getCity, Comparator.nullsFirst(String::compareTo))
				.compare(this, o);
	}
}

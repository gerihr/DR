package com.app.model;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class SearchCriteria {
	private final String name;
	private final String location;
	private final String category;
	private final String typeOfTraining;
	private final String gender;
	private final String ratingStars;
	private final Double minPrice;
	private final Double maxPrice;

}

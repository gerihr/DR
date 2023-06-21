package com.app.storage;
import com.app.dto.CityDTO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
public class CityStorage {
	private final SortedSet<CityDTO> cities;
	public static final String COUNTRIES_RELATIVE_PATH = "/static/countries.json";

	private static final ObjectMapper mapper =
			new ObjectMapper()
					.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
					.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

	public CityStorage() throws IOException {
		TreeSet<CityDTO> cityDTOS;

		cityDTOS =
				mapper.readValue(
						CityStorage.class.getResource(COUNTRIES_RELATIVE_PATH), new TypeReference<>() {});


		cities = Collections.unmodifiableSortedSet(cityDTOS);
	}


	/**
	 * Retrieves the single country object for given country code
	 *
	 * @param countryCode - parameter for filtering country object
	 * @return {@link CityDTO}
	 */
	public CityDTO getCountryByCountryCode(String countryCode) {
		if (StringUtils.isBlank(countryCode)) {
			return null;
		}

		return cities.stream()
				.filter(country -> countryCode.equals(country.getCity()))
				.findFirst()
				.orElse(null);
	}

	/**
	 * Filters the countries by name prefix. In case all countries are retrieved (no filter is
	 * passed), unmodifiable set is returned. Filtered countries are sorted by country namePrefix.
	 *
	 * @param namePrefix - country name prefix
	 * @return sorted set of {@link CityDTO} which contains the country code and country name
	 */
	public Set<CityDTO> getCountriesByCountryNameStartsWith(String namePrefix) {
		return StringUtils.isBlank(namePrefix)
				? cities
				: cities.stream()
						.filter(country -> country.getCity().toLowerCase().startsWith(namePrefix.toLowerCase()))
						.collect(Collectors.toCollection(TreeSet::new));
	}


}
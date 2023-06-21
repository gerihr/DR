package com.app.service;

import com.app.dto.CityDTO;
import com.app.storage.CityStorage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CityService {

	private final CityStorage cityStorage;

	@Autowired
	public CityService(CityStorage cityStorage) {
		this.cityStorage = cityStorage;
	}

	public Set<CityDTO> getCities(String namePrefix) {
		return cityStorage.getCountriesByCountryNameStartsWith(namePrefix);
	}


}
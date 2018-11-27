package com.santiago.users.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.santiago.users.entity.models.Country;
import com.santiago.users.entity.services.ICountryService;

@CrossOrigin(origins = {"*"})
@RestController
public class CountryController{
	
	@Autowired
	ICountryService countryService;
	
	@GetMapping("/countries")
	public List<Country> getAllCountries(){
		return countryService.getAll();
	}
	
	@GetMapping("/country/{id}")
	public Country getCountry(@PathVariable(value = "id") long id) {
		return countryService.get(id);
	}
	
	
	
	@PostMapping("/country")
	public void add(@RequestBody Country country) {
		countryService.post(country);
	}
	
	@PutMapping("/country/{id}")
	public void update(@RequestBody Country country,@PathVariable(value = "id") long id) {
		countryService.put(country, id);
	}
	
	@DeleteMapping("/country/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		countryService.delete(id);
	}

}
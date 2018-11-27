package com.santiago.users.entity.services;

import java.util.List;

import com.santiago.users.entity.models.Country;

public interface ICountryService {
	public Country get(long id);
	public List<Country> getAll();
	public void post(Country country);
	public void put(Country country,long id);
	public void delete(long id);
}

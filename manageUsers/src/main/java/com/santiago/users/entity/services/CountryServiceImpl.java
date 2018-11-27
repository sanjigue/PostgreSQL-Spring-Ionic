package com.santiago.users.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.santiago.users.entity.dao.ICountryDao;
import com.santiago.users.entity.models.Country;

@Service
public class CountryServiceImpl implements ICountryService{

	@Autowired
	private ICountryDao countryDao;
	
	@Override
	public Country get(long id) {
		return countryDao.findById(id).get();
	}

	@Override
	public List<Country> getAll() {
		return (List<Country>) countryDao.findAll();
	}

	@Override
	public void post(Country country) {
		countryDao.save(country);
	}

	@Override
	public void put(Country country, long id) {
		countryDao.findById(id).ifPresent((x)->{
			country.setId(id);
			countryDao.save(country);
		});
	}

	@Override
	public void delete(long id) {
		countryDao.deleteById(id);
	}
}

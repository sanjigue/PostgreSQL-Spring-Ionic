package com.santiago.users.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.santiago.users.entity.models.Country;

public interface ICountryDao extends CrudRepository<Country, Long>{
	
}


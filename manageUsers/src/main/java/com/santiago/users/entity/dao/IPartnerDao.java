package com.santiago.users.entity.dao;


import org.springframework.data.repository.CrudRepository;

import com.santiago.users.entity.models.Partner;

public interface IPartnerDao extends CrudRepository<Partner, Long>{
	
}
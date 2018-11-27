package com.santiago.users.entity.dao;


import org.springframework.data.repository.CrudRepository;

import com.santiago.users.entity.models.User;

public interface IUserDao extends CrudRepository<User, Long>{
	
}

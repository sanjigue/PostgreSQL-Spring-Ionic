package com.santiago.users.entity.services;

import java.util.List;

import com.santiago.users.entity.models.User;

public interface IUserService {
	public User get(long id);
	public List<User> getAll();
	public void post(User user);
	public void put(User user,long id);
	public void delete(long id);
}

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

import com.santiago.users.entity.models.User;
import com.santiago.users.entity.services.IUserService;

@CrossOrigin(origins = {"*"})
@RestController
public class UserController{
	
	@Autowired
	IUserService userService;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userService.getAll();
	}
	
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable(value = "id") long id) {
		return userService.get(id);
	}
	
	@PostMapping("/user")
	public void add(@RequestBody User user) {
		userService.post(user);
	}
	
	@PutMapping("/user/{id}")
	public void update(@RequestBody User user,@PathVariable(value = "id") long id) {
		userService.put(user, id);
	}
	
	@DeleteMapping("/user/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		userService.delete(id);
	}

}
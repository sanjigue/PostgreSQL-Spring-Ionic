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

import com.santiago.users.entity.models.Partner;
import com.santiago.users.entity.services.IPartnerService;

@CrossOrigin(origins = {"*"})
@RestController
public class PartnerController{
	
	@Autowired
	IPartnerService partnerService;
	
	@GetMapping("/partners")
	public List<Partner> getAllPartners(){
		return partnerService.getAll();
	}
	
	@GetMapping("/partner/{id}")
	public Partner getPartner(@PathVariable(value = "id") long id) {
		return partnerService.get(id);
	}
	
	@PostMapping("/partner")
	public void add(@RequestBody Partner partner) {
		partnerService.post(partner);
	}
	
	@PutMapping("/partner/{id}")
	public void update(@RequestBody Partner partner,@PathVariable(value = "id") long id) {
		partnerService.put(partner, id);
	}
	
	@DeleteMapping("/partner/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		partnerService.delete(id);
	}

}
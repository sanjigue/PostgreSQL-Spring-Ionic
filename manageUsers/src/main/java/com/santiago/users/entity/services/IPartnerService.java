package com.santiago.users.entity.services;

import java.util.List;

import com.santiago.users.entity.models.Partner;

public interface IPartnerService {
	public Partner get(long id);
	public List<Partner> getAll();
	public void post(Partner user);
	public void put(Partner user,long id);
	public void delete(long id);
}

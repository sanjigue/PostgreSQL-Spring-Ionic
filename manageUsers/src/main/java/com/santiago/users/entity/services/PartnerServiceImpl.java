package com.santiago.users.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.santiago.users.entity.dao.IPartnerDao;
import com.santiago.users.entity.models.Partner;

@Service
public class PartnerServiceImpl implements IPartnerService{

	@Autowired
	private IPartnerDao partnerDao;
	
	@Override
	public Partner get(long id) {
		return partnerDao.findById(id).get();
	}

	@Override
	public List<Partner> getAll() {
		return (List<Partner>) partnerDao.findAll();
	}

	@Override
	public void post(Partner partner) {
		partnerDao.save(partner);
	}

	@Override
	public void put(Partner partner, long id) {
		partnerDao.findById(id).ifPresent((x)->{
			partner.setId(id);
			partnerDao.save(partner);
		});
	}

	@Override
	public void delete(long id) {
		partnerDao.deleteById(id);
	}
}
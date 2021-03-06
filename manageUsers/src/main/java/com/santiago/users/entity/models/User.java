package com.santiago.users.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;


@Entity
@Table(name = "res_users")

public class User implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String login;
	
	@NotEmpty
	private String password;
	
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "partnerId", nullable = false)
	//@JsonIgnoreProperties({ "id", "user", "name" ,"countryId","createUid"})
	private Partner partner;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	

	public Partner getPartner() {
		return partner;
	}

	public void setPartner(Partner partner) {
		this.partner = partner;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User(long id, @NotEmpty String login, @NotEmpty String password,	 Partner partner) {
		super();
		this.id = id;
		this.login = login;
		this.password = password;
		this.partner = partner;
	}

	public User() {
		
	}	
	
}

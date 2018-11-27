package com.santiago.users.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "res_country")

public class Country implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	private String code;
	
	@NotEmpty
	private String name;
	
	@NotNull
	private Integer writeUid;
	
	@NotNull
	private Integer createUid;

	public Country(long id, @NotEmpty String code, @NotEmpty String name, @NotNull Integer writeUid,
			@NotNull Integer createUid) {
		super();
		this.id = id;
		this.code = code;
		this.name = name;
		this.writeUid = writeUid;
		this.createUid = createUid;
	}

	public Country() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getWriteUid() {
		return writeUid;
	}

	public void setWriteUid(Integer writeUid) {
		this.writeUid = writeUid;
	}

	public Integer getCreateUid() {
		return createUid;
	}

	public void setCreateUid(Integer createUid) {
		this.createUid = createUid;
	}
	
	
	
	
}
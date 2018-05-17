package com.magnojr.mservice.simplechat.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Sender {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	@NotNull
	private String name;	

	public Sender(String name) {
		super();
		this.name = name;
	}

	public Sender() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}

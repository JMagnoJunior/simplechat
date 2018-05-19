package com.magnojr.mservice.simplechat.resources;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.magnojr.mservice.simplechat.models.Message;

@CrossOrigin( origins = {"http://localhost:3000", "http://localhost"}, allowedHeaders="*")
@RepositoryRestResource(collectionResourceRel = "messages", path = "messages")
public interface MessageRepositoryResource extends PagingAndSortingRepository<Message, Long>{

	public List<Message> findAllByOrderByIdAsc();
	
}
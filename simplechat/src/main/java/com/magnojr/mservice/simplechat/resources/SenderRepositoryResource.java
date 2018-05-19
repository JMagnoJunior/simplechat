package com.magnojr.mservice.simplechat.resources;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import com.magnojr.mservice.simplechat.models.Sender;

@CrossOrigin( origins = {"http://localhost:3000", "http://localhost"}, allowedHeaders="*")
@RepositoryRestResource(collectionResourceRel = "senders", path = "senders")
public interface SenderRepositoryResource extends CrudRepository<Sender, Long> {

}

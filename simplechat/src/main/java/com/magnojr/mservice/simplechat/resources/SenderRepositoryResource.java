package com.magnojr.mservice.simplechat.resources;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.magnojr.mservice.simplechat.models.Sender;

@RepositoryRestResource(collectionResourceRel = "senders", path = "senders")
public interface SenderRepositoryResource extends CrudRepository<Sender, Long>{

}

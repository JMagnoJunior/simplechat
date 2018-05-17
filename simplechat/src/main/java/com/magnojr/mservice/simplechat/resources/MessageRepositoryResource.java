package com.magnojr.mservice.simplechat.resources;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.magnojr.mservice.simplechat.models.Message;

@RepositoryRestResource(collectionResourceRel = "messages", path = "messages")
public interface MessageRepositoryResource extends PagingAndSortingRepository<Message, Long>{

}

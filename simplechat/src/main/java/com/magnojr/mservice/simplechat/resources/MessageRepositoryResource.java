package com.magnojr.mservice.simplechat.resources;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "messages", path = "messages")
public class MessageRepositoryResource {

}

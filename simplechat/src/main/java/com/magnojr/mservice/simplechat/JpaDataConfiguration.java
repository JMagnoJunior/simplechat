package com.magnojr.mservice.simplechat;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = {"com.magnojr.mservice.simplechat.resources"})
@EntityScan(basePackages = {"com.magnojr.mservice.simplechat.models"})
public class JpaDataConfiguration {

}

package com.magnojr.mservice.simplechat.resources;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.magnojr.mservice.simplechat.JpaDataConfiguration;
import com.magnojr.mservice.simplechat.configuration.TestJpaConfiguration;
import com.magnojr.mservice.simplechat.configuration.TestRestConfiguration;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = { JpaDataConfiguration.class, TestJpaConfiguration.class, TestRestConfiguration.class })
public class MessageRepositoryResourceTest {

	@Autowired
	private MockMvc mvc;

	@Test
	public void whenCallResourceMessages_shouldExists() throws Exception {
		mvc.perform(get("http://localhost:8080/messages").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());

	}

}

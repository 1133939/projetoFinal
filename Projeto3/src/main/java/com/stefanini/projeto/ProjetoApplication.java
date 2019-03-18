package com.stefanini.projeto;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

import com.stefanini.projeto.filter.CorsFilter;

@ApplicationPath("api")
public class ProjetoApplication extends ResourceConfig {

	public ProjetoApplication() {
		packages("com.stefanini.projeto.rest");
		register(new CorsFilter());
	}

}
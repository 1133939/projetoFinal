package com.stefanini.projeto.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.projeto.model.Copo;
import com.stefanini.projeto.service.GarrafaService;
@Path("copo")
public class CopoResource {
@Inject
GarrafaService garrafaService;

@POST
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public Response saveCopo (Copo copo) {
	garrafaService.saveCopo(copo);
	return Response.status(Response.Status.OK).build();
}
}

package com.stefanini.projeto.rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.stefanini.projeto.service.GarrafaService;
@Path("copo")
public class CopoResource {
@Inject
GarrafaService garrafaService;

@DELETE
@Path("/{id}")
@Produces(MediaType.APPLICATION_JSON)
public Response deletar(@PathParam("id") Long id) {
    garrafaService.delete(id);
	return Response.status(Response.Status.OK).build();
}
}

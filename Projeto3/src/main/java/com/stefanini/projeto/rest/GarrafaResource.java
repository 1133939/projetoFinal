package com.stefanini.projeto.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.projeto.model.Garrafa;
import com.stefanini.projeto.service.GarrafaService;

@Path("garrafa")
public class GarrafaResource {

	@Inject
	private GarrafaService garrafaService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response findAll() {
		List<Garrafa> garrafas = garrafaService.findAll();
		if (garrafas.isEmpty()) {
			return Response.ok().build();
		}
		return Response.ok(garrafas).build();
	}
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createDono (Garrafa garrafa) {
		garrafaService.saveGarrafa(garrafa);
		return Response.status(Response.Status.OK).build();
	}

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response update(Garrafa garrafa) {
       garrafaService.update(garrafa);
		return Response.status(Response.Status.OK).build();
    }
	
	@DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response delete(@PathParam("id") Long id) {
        garrafaService.delete(id);
		return Response.status(Response.Status.OK).build();
    }


	
	
	
//	Está na CopoResource
//	@POST
//	@Consumes(MediaType.APPLICATION_JSON)
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response salvarCopo (Copo copo) {
//		garrafaService.saveCopo(copo);
//		return Response.status(Response.Status.OK).build();
//	}
}

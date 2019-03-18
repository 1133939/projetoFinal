package com.stefanini.projeto.test.UT;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import com.stefanini.projeto.dao.GarrafaDAO;
import com.stefanini.projeto.model.Garrafa;
import com.stefanini.projeto.service.GarrafaService;

@RunWith(MockitoJUnitRunner.class)
public class GarrafaServiceUT {

	public GarrafaService service = new GarrafaService();

	@Mock
	GarrafaDAO garrafaDao;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
		service.setGarrafaDao(garrafaDao);
		Mockito.when(garrafaDao.findAll()).thenReturn(criarListaGarrafaMock());
	}

	@Test
	public void findAll() {
		assertNotNull(service.findAll());
	}
	
	@Test
	public void teste() {
		// Dois números pares - somam-se
		assertEquals(service.teste(2L,2L), 4l);
		
		// Dois números ímpares - subtraem-se
		assertEquals(service.teste(1L,3L), -2l);
		
		// Número ímpar e outro par - Deve ser retornado zero
		assertEquals(service.teste(2L,3L), 0l);
		
		// Um parametro não informado - Deve ser retornado zero
		assertEquals(service.teste(null,3L), 0l);
		
		// Ambos os parametro não foram informados - Deve ser retornado zero
		assertEquals(service.teste(null,null), 0l);
	}

	private Garrafa criarGarrafaMock() {
		Garrafa garrafa = new Garrafa();
		garrafa.setId(1L);
		garrafa.setNome("Nome");
		return garrafa;
	}

	private List<Garrafa> criarListaGarrafaMock() {
		List<Garrafa> garrafas = new ArrayList<>();
		garrafas.add(criarGarrafaMock());
		return garrafas;
	}
}

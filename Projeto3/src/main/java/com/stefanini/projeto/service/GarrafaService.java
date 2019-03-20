package com.stefanini.projeto.service;

import java.util.List;

import javax.inject.Inject;

import com.stefanini.projeto.dao.CopoDAO;
import com.stefanini.projeto.dao.GarrafaDAO;
import com.stefanini.projeto.model.Copo;
import com.stefanini.projeto.model.Garrafa;

public class GarrafaService {

	@Inject
	GarrafaDAO garrafaDao;
	@Inject
	CopoDAO copoDao;
	
	public List<Garrafa> findAll() {
		return garrafaDao.findAll();
	}
	
	public List<Garrafa> buscaPorNome(String garrafa){
		return garrafaDao.findGarrafaByName(garrafa);
	}
	public void saveCopo(Copo copo) {
		if(lessThenFiveCopos(copo.getGarrafa())) {
			copoDao.save(copo);
		}
	}

	public void saveGarrafa(Garrafa garrafa) {
		if(garrafaNotExists(garrafa)) {
			if(lessThenFiveCopos(garrafa)) {
			this.garrafaDao.save(garrafa);
			}else {
				System.out.println("Esta garrafa já possui 5 copos");
			}
			System.out.println("Salvando... Garrafa");
		}else {
			System.out.println("Garrafa com este nome já está cadastrado");	
	}
	}
	public void update(Garrafa garrafa) {
		if(garrafaNotExists(garrafa)) {
		this.garrafaDao.update(garrafa);
		}else {
		System.out.println("Garrafa com este nome já cadastrado");
		}
	}

	public void delete(Long id) {
		this.garrafaDao.delete(id);
	}
	public void setGarrafaDao(GarrafaDAO garrafaDao) {
		this.garrafaDao = garrafaDao;

	}
	public long teste(Long numero1, Long numero2) {
		return numero1 == null || numero2 == null 
				? 0L : numero1 % 2l == 0 && numero2 % 2l == 0 
				? numero1 + numero2 
						: numero1 % 2l != 0 && numero2 % 2l != 0 
						? numero1-numero2 
								: 0l;
	}
	
	
	// 					Métodos lógicos do negócio
	//
	//          Verifica se não existe uma Garrafa cadastrada com um nome garrafa.getNome antes de cadastrar
	private boolean garrafaNotExists(Garrafa garrafa) {
		List<Garrafa> garrafas = garrafaDao.findGarrafaByNameWhere(garrafa);
		if(garrafas.size()==0) {
		return true;
	}else {
		return false;
	}
	}
	//               Retorna true caso a Garrafa tenha menos que 5 Copos
	private boolean lessThenFiveCopos (Garrafa garrafa) {
		if(garrafaDao.findAllById(garrafa).size()<5) {
			System.out.println("Pode ter mais copos");
			return true;
		}
		System.out.println("Não pode ter mais copos");
			return false;
	}

}
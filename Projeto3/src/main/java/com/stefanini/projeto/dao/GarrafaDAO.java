package com.stefanini.projeto.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.stefanini.projeto.model.Garrafa;
import com.stefanini.projeto.util.HibernateUtil;
@Transactional
public class GarrafaDAO {

	EntityManager entityManager = HibernateUtil.getEntityManager();
	
	public List<Garrafa> findAll() {
		return entityManager.createQuery("select distinct g from Garrafa g left join g.copos", Garrafa.class).getResultList();
	}
	public List<Garrafa> findAllById(Garrafa garrafa) {
		return entityManager.createQuery("select distinct g from Garrafa g left join g.copos where g.id=?1", Garrafa.class).setParameter(1, garrafa.getId()).getResultList();
	}
	public List<Garrafa> findGarrafaByName(String garrafa) {
		List<Garrafa> garrafas = entityManager.createQuery("select g from Garrafa g where g.nome LIKE ?1", Garrafa.class).setParameter(1, "%"+garrafa+"%").getResultList();
		return garrafas;
	}
	public List<Garrafa> findGarrafaByNameWhere(Garrafa garrafa) {
		List<Garrafa> garrafas = entityManager.createQuery("select g from Garrafa g where g.nome=?1", Garrafa.class).setParameter(1, garrafa.getNome()).getResultList();
		return garrafas;
	}
	public void save(Garrafa garrafa) {
	entityManager.persist(garrafa);	
	}
	public void update(Garrafa garrafa) {
	entityManager.merge(garrafa);	
	}
	public void delete(Long id) {
	entityManager.remove(id);
	}

}

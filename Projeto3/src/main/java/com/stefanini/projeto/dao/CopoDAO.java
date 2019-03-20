package com.stefanini.projeto.dao;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.stefanini.projeto.model.Copo;
import com.stefanini.projeto.util.HibernateUtil;
@Transactional
public class CopoDAO {

EntityManager entityManager = HibernateUtil.getEntityManager();
	
	public void save(Copo copo) {
		entityManager.persist(copo);
	}
	public void update(Copo copo) {
		entityManager.merge(copo);
	}
	public void excluir(Long id) {
		Copo copo = new Copo();
		copo.setId(id);
		entityManager.remove(copo.getId());
	}
	public void deleteAllCoposInGarrafa(Long id) {
		entityManager.createQuery("DELETE FROM Copo c WHERE c.garrafa.id = ?1").setParameter(1, id);
	}
}

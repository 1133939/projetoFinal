package com.stefanini.projeto.util;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class HibernateUtil {

	private static EntityManagerFactory emf;

	private static EntityManagerFactory getEntityManagerFactory() {
		if (emf == null) {
			synchronized (HibernateUtil.class) {
				if (emf == null)
					try {
						emf = Persistence.createEntityManagerFactory("TREINAMENTO_HACKATHON");
					} catch (RuntimeException ex) {
						throw ex;
					}
			}
		}
		return emf;
	}

	public static EntityManager getEntityManager() {
		try {
			return getEntityManagerFactory().createEntityManager();
		} catch (RuntimeException ex) {
			throw ex;
		}
	}
}
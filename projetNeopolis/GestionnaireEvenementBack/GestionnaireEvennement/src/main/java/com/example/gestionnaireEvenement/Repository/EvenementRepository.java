package com.example.gestionnaireEvenement.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestionnaireEvenement.Model.Evenement;


public interface EvenementRepository extends JpaRepository<Evenement, Long>{
	
	Evenement findByIdEvenement(Long id);

}

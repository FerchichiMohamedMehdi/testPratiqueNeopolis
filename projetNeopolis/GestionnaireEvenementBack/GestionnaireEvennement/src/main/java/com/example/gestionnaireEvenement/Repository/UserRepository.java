package com.example.gestionnaireEvenement.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestionnaireEvenement.Model.Evenement;
import com.example.gestionnaireEvenement.Model.User;


public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByIdUser(Long id);

}

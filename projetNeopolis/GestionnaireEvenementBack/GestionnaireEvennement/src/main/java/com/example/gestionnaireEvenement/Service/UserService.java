package com.example.gestionnaireEvenement.Service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.gestionnaireEvenement.Exception.NullException;
import com.example.gestionnaireEvenement.Exception.ResourceNotFoundException;
import com.example.gestionnaireEvenement.Model.Evenement;
import com.example.gestionnaireEvenement.Model.User;
import com.example.gestionnaireEvenement.Repository.UserRepository;


@Service
public class UserService {
	
	@Autowired UserRepository userRepo;

	 //Lister tous les évènements
	 public List<User> listerUser(){
		return userRepo.findAll();
	 }
	 //get By Id User
	 public User getById(Long id) {
		 User user = userRepo.findByIdUser(id);
		 
		  return user;
	 }
	 //créer User
	 public User CreateUser(User u) {
		return userRepo.save(u);
	 }

	 //Supprimer User
	public void supprimerUser(Long id) {
		try {
			User user = userRepo.findByIdUser(id);
			try {
				userRepo.delete(user);
				}
			catch(Exception e) {
				throw new ResourceNotFoundException("Erreur lors de la suppression");
				}
			}catch(Exception e) {
				throw new NullException("id not found");
				}
		}
	 //Mettre à jour User
	public void UpdateUser(User u ,Long id) {
		User user = userRepo.findByIdUser(id);
		
		if(user != null) {
			userRepo.save(u);
		}else {
			throw new NullException("User not found");
		}
		
	}
	

	

	
	


	
	

}

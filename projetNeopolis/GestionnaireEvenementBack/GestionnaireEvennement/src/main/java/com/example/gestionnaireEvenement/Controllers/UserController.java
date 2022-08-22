package com.example.gestionnaireEvenement.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gestionnaireEvenement.Model.Evenement;
import com.example.gestionnaireEvenement.Model.User;
import com.example.gestionnaireEvenement.Service.EvenementService;
import com.example.gestionnaireEvenement.Service.UserService;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
//@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
	
	@Autowired UserService userService;
	
	@PostMapping("/add")
	public User addEvent(@RequestBody User u) {
		return userService.CreateUser(u);
	}
	
	@GetMapping("/list")
	public List<User> getAllUsers(){
		return userService.listerUser();
	}
	
	@PutMapping("/User/Update/{id}")
	public void updateEvenement(@RequestBody User e,@PathVariable(value = "id")Long id ) {
		 userService.UpdateUser(e, id);
		 }

	
	@DeleteMapping("/User/delete/{id}")
	public void deleteUser(@PathVariable(value = "id")Long id) {
		
		userService.supprimerUser(id);
	
	}



	

}

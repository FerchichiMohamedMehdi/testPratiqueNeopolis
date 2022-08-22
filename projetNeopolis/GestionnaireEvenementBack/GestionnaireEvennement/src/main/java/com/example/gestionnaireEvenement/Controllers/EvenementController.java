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
import com.example.gestionnaireEvenement.Service.EvenementService;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/evenements")
//@CrossOrigin(origins = "http://localhost:4200")

public class EvenementController {
	
	@Autowired EvenementService eventService;
	
	@PostMapping("/add")
	public Evenement addEvent(@RequestBody Evenement e) {
		return eventService.CreateEvent(e);
	}
	
	@GetMapping("/list")
	public List<Evenement> getAllEvenements(){
		return eventService.listerEvenement();
	}
	
	@PutMapping("/Evenement/Update/{id}")
	public void updateEvenement(@RequestBody Evenement e,@PathVariable(value = "id")Long id ) {
		 eventService.UpdateEvenement(e, id);
		 }

	
	@DeleteMapping("/Evenements/delete/{id}")
	public void deleteEvenement(@PathVariable(value = "id")Long id) {
		
		eventService.supprimerEvenement(id);
	
	}



	

}

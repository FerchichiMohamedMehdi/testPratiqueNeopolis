import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Evenement } from 'src/app/model/Evenement';
import { TypeEvent } from 'src/app/model/TypeEvent';
import { EvenementsService } from 'src/app/services/evenements.service';

@Component({
  selector: 'app-ajout-evenement',
  templateUrl: './ajout-evenement.component.html',
  styleUrls: ['./ajout-evenement.component.css']
})
export class AjoutEvenementComponent implements OnInit {

  constructor(private evenementService:EvenementsService) { }
  form!:FormGroup
  submitted=false;
  titre="";
  type:TypeEvent=TypeEvent.culturel;
  date:String="";
  heure:String="";
  description:String="";
  photos:String="";
  adresse:String="";
  lat:number=0;
  lng:number=0;
  evenement:Evenement=new Evenement();
  ngOnInit(): void {
  }
  eventHandler(event: any ,name:string){
    // Add marker on double click event
   if(name === 'mapDblclick'){
    this.evenement.lat=event.latLng.lat();
    this.evenement.lng=event.latLng.lng();
    }
  }

  onSubmit(){
    this.submitted =true;
    this.evenementService.addEvenement(this.evenement)
    .subscribe(data => {
      console.log(this.evenement.titre);
      console.log(data)},
      (error:any) =>{console.log(error)});
      window.location.reload();
  }
  valuechange(event:any){
    this.evenement.titre = event.target.value.titre;
    this.evenement.type = event.target.value.type;
    this.evenement.date = event.target.value.date;
    this.evenement.heure = event.target.value.heure;
    this.evenement.description = event.target.value.description;
    this.evenement.adresse = event.target.value.adresse;
    console.log(this.evenement)
  }

  close(){}

}

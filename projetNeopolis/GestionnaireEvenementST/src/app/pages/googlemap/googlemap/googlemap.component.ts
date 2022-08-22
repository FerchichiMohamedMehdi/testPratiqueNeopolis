import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { MatDialog } from '@angular/material/dialog';
import { Evenement } from 'src/app/model/Evenement';
import { EvenementsService } from 'src/app/services/evenements.service';
import { AjoutEvenementComponent } from '../../ajout-evenement/ajout-evenement.component';

@Component({
  selector: 'googlemap-root',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapAppComponent {
  title = 'angular-google-maps-app';
  latMarque:number=0;
  longMarque:number=0;
  

  constructor(private eventService:EvenementsService,public dialog: MatDialog){}

  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;

  zoom = 15;
  maxZoom = 30;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  //public markers :Evenement []  =[];
  markers: any=[];
  evenement: Evenement[]=[];
  currentEvenement:Evenement= new Evenement();
  
    infoContent = ''
  public getEvent(){
    this.eventService.getEvenement().subscribe(
      Response=>{
       this.evenement=Response
       for(let i in this.evenement){
        let valeur=this.evenement[i];
        console.log(valeur)
        this.markers.push({
          position: {
            lat: valeur.lat,
            lng: valeur.lng
          },
          label: {
            color: 'black',
            text: 'Marker label ' + (this.markers.length + 1),
          },
          title: 'Marker title ' + (this.markers.length + 1),
          info: 'Marker info ' + (this.markers.length + 1),
          options: {
            animation: google.maps.Animation.DROP,
          },
        })
       }
       
       
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
    
  }
  ngOnInit() {
    this.getEvent()
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    
    
    
    
  }

  zoomIn() {
    if (this.zoom < this.maxZoom) this.zoom++;
   
  }

  zoomOut() {
    if (this.zoom > this.minZoom) this.zoom--;
  }

  eventHandler(event: any ,name:string){
    
    
    // Add marker on double click event
   if(name === 'mapDblclick'){
    this.currentEvenement.date=event.latLng.lat();
    this.currentEvenement.date=event.latLng.lng();
      this.openDialog2()
    }
  }

  // Markers
  logCenter() {
   
  }

  dropMarker(event:any) {

    this.markers.push({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      label: {
        color: 'black',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.DROP,
      },
    })
  }

  openInfo(marker: MapMarker, content: string) {
    this.infoContent = content;
    this.info.open(marker)
  }
  openDialog2(){
    let dialogRef = this.dialog.open(AjoutEvenementComponent);
    dialogRef.afterClosed().subscribe(resul=>{
    
    });
  }
}
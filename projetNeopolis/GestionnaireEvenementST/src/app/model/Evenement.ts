import { TypeEvent } from "./TypeEvent";

export class Evenement{
    idEvenement: number=0;
    titre:String="";
    type:TypeEvent=TypeEvent.Sportif;
    date:String="";
    heure:String="";
    description:String="";
    photos:String="";
    adresse:String="";
    lat:number=0;
    lng:number=0;

    constructor(){
    }
}
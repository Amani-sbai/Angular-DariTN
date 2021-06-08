import { Type } from "@angular/core";
import { Realestates } from "./realestates";

export class Appointment{

    id:number;
    date:Date;
   //type:TypeAppointment;
   Real_estates:Realestates;
    accepted:number;
    type:string;
    idRealEstate:number;
    
}
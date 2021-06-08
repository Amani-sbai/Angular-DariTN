import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Realestates } from '../realestates';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

 appointments:Appointment[];
 realestates:Realestates[];
  constructor(private appointmentService: AppointmentService) 
  {}
  ngOnInit(): void {
    this.getAllAppointments();
    //this.unpdateAppointmet(appointment:Appointment);
  }
public getAllAppointments():void{
  this.appointmentService.getAllAppointments().subscribe(
    (Response: Appointment[]) =>{
    this.appointments=Response;
  }),
  (error:HttpErrorResponse) =>{
    alert(error.message);
  };}
/*public updateAppointment(): 
void{

  this.appointmentService.updateAppointment().subscribe(
    (Response: Appointment[]) =>{
    this.appointment=Response;
  }),
  (error:HttpErrorResponse) =>{
    alert(error.message);
  }
  ;*/

  delete (i:number){
  this.appointmentService.deleteAppointment(this.appointments[i].id).subscribe(( response: void)=>{this.getAllAppointments();},
    (error: HttpErrorResponse) => {alert(error.message);});
}

}

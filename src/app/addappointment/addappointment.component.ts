import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {
appointment:Appointment;
  constructor(private appointmentService: AppointmentService ) { }

  ngOnInit(): void {
   // this.appointment=new Appointment();
  }
addAppointment(){
  this.appointmentService.addAppointment(this.appointment).subscribe((response: Appointment) => {console.log(response);},
  (error: HttpErrorResponse) => {alert(error.message);});

}
}

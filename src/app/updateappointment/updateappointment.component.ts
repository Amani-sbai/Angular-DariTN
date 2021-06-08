import { Component, OnInit } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import{AppointmentService} from '../appointment.service';
import { Appointment } from '../appointment';
@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit {
currentapp= new Appointment();
  AppointmentService: any;
  activatedRoute: any;
  constructor() { }

  ngOnInit(): void {
    this.AppointmentService.getAppointmentById(this.activatedRoute.snapshot.params.id).
    subscribe( appointment => { this.currentapp =  appointment; });
  }

}

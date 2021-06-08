import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentService } from './appointment.service';
import { RentingComponent } from './renting/renting.component';
import { SellingComponent } from './selling/selling.component';
import { SellingServiceService } from './selling-service.service';
//import { Routes } from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
import { RentingServiceService } from './renting-service.service';

import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import { AddappointmentComponent } from './addappointment/addappointment.component';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);






const ROUTES: Routes = [
  {path : 'appointment', component : AppointmentComponent},
  {path : 'addappointment', component : AddappointmentComponent},
  {path : 'sellingmanagment', component: SellingComponent},
  {path : 'rentingmanagment' , component: RentingComponent},
  {path : 'calendar' , component: CalendarComponent},
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    RentingComponent,
    SellingComponent,
    CalendarComponent,
    AddappointmentComponent,
    UpdateappointmentComponent,
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FullCalendarModule

    
  ],
  providers: [AppointmentService,SellingServiceService,RentingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

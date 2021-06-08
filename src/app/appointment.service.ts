import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Appointment} from 'src/app/appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Realestates } from './realestates';
import { id } from 'date-fns/locale';

const httpOptions={
  Headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiServerUrl:string;
  realestates:Realestates[];
  constructor(private http :HttpClient) {
   //this.apiServerUrl = apiBaseUrl;
  }
 
  
  public addAppointment(appointment:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>('${this.apiSeverUrl}/Dari/tn/addrdv',appointment);
  }



  public updateAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.put<Appointment>('http://localhost:8081/Dari/tn/update', appointment);
}


public deleteAppointment(id:number):Observable<void>{
  return this.http.delete<void>('http://localhost:8081/Dari/tn/deleteAppointmentById/'+id);
}

public getAllAppointments():Observable<Appointment[]>{
  return this.http.get<Appointment[]>('http://localhost:8081/Dari/tn/getallappointements');
}
public getAppointmentbyid(id: number): Observable<Appointment> {
  return this.http.get<Appointment>('http://localhost:8081/Dari/tn/getAppointmentById'+id);
}

/*public getAppointmentByType(type:TypeAppointment):Observable<Appointment[]>{
  return this.http.get<Appointment[]>('${this.apiSeverUrl}/appointment/get/${type}');
}
*/

/*public getAppointment(id:number):Observable<Appointment[]>{
  return this.http.get<Appointment[]>('${this.apiSeverUrl}/appointment/get/${id}');
}*/


}
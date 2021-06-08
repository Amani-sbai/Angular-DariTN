import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Renting} from 'src/app/renting';
@Injectable({
  providedIn: 'root'
})
export class RentingServiceService {
  private apiServerUrl:string;
  constructor(private http :HttpClient) { }

public getRentings():Observable<Renting[]>{
  return this.http.get<Renting[]>('http://localhost:8081/Dari/tn/getallrenting');
}

public deleteRentingById(id:number):Observable<void>{
  return this.http.delete<void>('http://localhost:8081/Dari/tn/deleteRentingById/${id}');
}

}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Salling} from 'src/app/selling';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellingServiceService {
  private apiServerUrl:string;

  constructor(private http :HttpClient) { }


  public addSelling(selling:Salling):Observable<Salling>{
    return this.http.post<Salling>('http://localhost:8081/Dari/tn/addsaling',selling);
  }


  public getAllSelling():Observable<Salling[]>{
    return this.http.get<Salling[]>('http://localhost:8081/Dari/tn/getallsaling');
  }
  public deleteSalingById(id:number):Observable<void>{
    return this.http.delete<void>(' http://localhost:8081/Dari/tn/deleteSalingtById/'+id);
  }

}

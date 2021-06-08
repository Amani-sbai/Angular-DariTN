import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({providedIn: 'root'})
export  class loginService{
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public login(username:string,password:string){
        const headers= new HttpHeaders({Authorization:'Basic'+ btoa(username+":"+password)})
      return this.http.get(`${this.apiServerUrl}/auth/login`,{headers,responseType:'text'as 'json'});
    }
}
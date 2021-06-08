import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './User';

@Injectable({providedIn: 'root'})
 export  class UserService{
  private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServerUrl}/retreive-all-users`);
      }
    
      public addUser(user:User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/addUser`, user);
      }
    
      public updateUser(user:User): Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/user`,user);
      }
    
      public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/user/${userId}`);
      }

      public getUserByid(userId: number): Observable<User> {
        return this.http.get<User>(`${this.apiServerUrl}/user/${userId}`);
      }

      public SignUp(user:User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/auth/registration`, user);
      }
 }
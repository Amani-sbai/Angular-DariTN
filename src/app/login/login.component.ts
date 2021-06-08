import { Component, OnInit } from '@angular/core';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  message:any;
  constructor(private service:loginService) { }

  ngOnInit(): void {
  }
 dologin(){
  let resp= this.service.login(this.username,this.password);
  resp.subscribe(data=>{console.log(data)})
 }
}

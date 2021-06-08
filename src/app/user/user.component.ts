import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from './User';
import {UserService} from './User.Service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[];
  public editUser: User;
  public deleteuser: User;
  public addUser :User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }
  public getUser(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
   //add User
   public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUser();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  //update User
  public onUpdateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUser();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'signup') {
      button.setAttribute('data-target', '#signUpModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteuser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }
  
 //delete User
  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUser();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public searchUsers(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (user.UserName.toLowerCase().indexOf(key.toLowerCase()) //!== -1
      //|| user.e_mail.toLowerCase().indexOf(key.toLowerCase()) !== -1
      //|| user.Role.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      ){
        results.push(user);
      }
    }
  this.users = results;
    if (results.length === 0 || !key) {
      this.getUser();
   }
  }
  //sign User
  public onSignup(signForm: NgForm): void {
    document.getElementById('sign-up').click();
    this.userService.SignUp(signForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUser();
        signForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}

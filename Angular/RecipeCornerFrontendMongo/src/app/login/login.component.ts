import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUserDetails } from '../services/LoggedUser.interface';
import { LoggedUserService } from '../services/LoggedUser.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails = {
    email : "",
    password : ""
  }

  constructor(private loginService : LoginService, private router : Router, private loggedUserService : LoggedUserService) { 

  }

  ngOnInit() {
  }
  
  handleLogin(){
    this.loginService.validateLogin(this.loginDetails).subscribe(
      (result : LoggedUserDetails) => {
        // this.toast.success({detail:"SUCCESS",summary:'Login Success',duration:5000});
        this.loggedUserService.isLoggedIn = true;
        this.loggedUserService.loggedInUserDetails = result;
        console.log(this.loggedUserService.loggedInUserDetails);
        this.router.navigateByUrl("my-recipes");
      },
      (error) => {
        alert("Error");
        console.log(error);
      }
    )
  }
}

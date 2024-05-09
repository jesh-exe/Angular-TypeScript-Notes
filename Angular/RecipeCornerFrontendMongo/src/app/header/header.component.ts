import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitService } from '../init.service';
import { LoginService } from '../login/services/login.service';
import { LoggedUserService } from '../services/LoggedUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string;

  constructor(private initService: InitService, public loggedUserService: LoggedUserService, private router : Router) {
     console.log(initService.config)
     
  }

  ngOnInit() {
  }

  searchBox(event){
    console.log(event);
  }

  handleLogout(){
    this.loggedUserService.isLoggedIn = false;
    this.loggedUserService.loggedInUserDetails = null;
    this.router.navigateByUrl("/recipes");
    alert("Logged Out Successful")
  }

}

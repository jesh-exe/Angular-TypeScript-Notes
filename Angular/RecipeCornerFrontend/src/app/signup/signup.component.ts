import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpDetails = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private signUpService: SignupService, private route: Router) { }

  ngOnInit() {
  }

  handleSignUp() {
    this.signUpService.signUpUser(this.signUpDetails).subscribe(
      (result) => {
        console.log("Response:", result);
        alert("Sign Up Successful!");
        this.route.navigateByUrl("/recipes");
      },
      (error) => {
        console.log("Subscription Error:", error);
        alert("Error!");
      }
    );
  }

}

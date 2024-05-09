import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/services/login.service';
import { LoggedUserService } from '../services/LoggedUser.service';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeGuard implements CanActivate, CanLoad {

  constructor(private loggedUserService : LoggedUserService, private router : Router){
  }

  // This will be called whenever the route is activated where the guard is mentioned
  // This guard will only allow access if the user is logged in as admin
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.loggedUserService.isLoggedIn)
    if(this.loggedUserService.isLoggedIn == false)
      this.router.navigate['/login']
    else
      return this.loggedUserService.isLoggedIn
  } 

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

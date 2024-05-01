import { Injectable } from '@angular/core';
import { LoggedUserDetails } from './LoggedUser.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

loggedInUserDetails : LoggedUserDetails
isLoggedIn : boolean

constructor() { }


}

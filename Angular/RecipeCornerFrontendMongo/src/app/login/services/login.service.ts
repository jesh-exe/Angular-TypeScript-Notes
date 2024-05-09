import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor(@Inject(APP_SERVICE_CONFIG) private config : any, private http : HttpClient) { }



  validateLogin(loginDetails)
  {
    return this.http.post(this.config.apiEndpoint+"/user/validate", loginDetails)
  }

}

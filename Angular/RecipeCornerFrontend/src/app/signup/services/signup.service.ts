import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: any, private http: HttpClient) { }

  signUpUser(userData)
  {
    return this.http.post<any>(this.config.apiEndpoint + "/user", userData, { responseType: 'text' });
  }

}

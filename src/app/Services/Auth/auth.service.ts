import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginInterface } from 'src/app/Models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient : HttpClient) { }

  login(loginInterface : loginInterface){
    // return this.httpClient.post(`${this.baseUrl}login`, loginInterface)
    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.httpClient.post('http://localhost:8090/login', 
        new HttpParams().set('username', loginInterface.username).set('password', loginInterface.password), config)
  }
}

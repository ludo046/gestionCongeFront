import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { loginInterface } from 'src/app/Models/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  user$ = new Subject<any>();

  constructor(private httpClient : HttpClient) { }

  login(loginInterface : loginInterface){
    // return this.httpClient.post(`${this.baseUrl}login`, loginInterface)
    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.httpClient.post('http://localhost:8080/login', 
        new HttpParams().set('username', loginInterface.username).set('password', loginInterface.password), config)
  }

  getUser(){
    return this.httpClient.get('http://localhost:8080/user')
  }

 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jourInterface } from 'src/app/Models/jour';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FerieService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient : HttpClient) { }

  addJour(jourInterface : jourInterface){
    return this.httpClient.post(`${this.baseUrl}jour_ferie`, jourInterface)
  }
}

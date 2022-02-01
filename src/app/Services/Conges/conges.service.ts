import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addCongesInterface } from 'src/app/Models/conges';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongesService {

  private baseUrl = environment.baseUrl

  constructor(private httpClient : HttpClient) { }

  addConges(addCongesInterface : addCongesInterface){
    return this.httpClient.post(`${this.baseUrl}conges`, addCongesInterface)
  }
}

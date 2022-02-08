import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { addCongesInterface, modifyCongesInterface } from 'src/app/Models/conges';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongesService {

  private baseUrl = environment.baseUrl;
  allConges$ = new Subject<any>();

  constructor(private httpClient : HttpClient) { }

  addConges(addCongesInterface : addCongesInterface){
    return this.httpClient.post(`${this.baseUrl}demande_absence`, addCongesInterface)
  }

  getConges(){
    return this.httpClient.get(`${this.baseUrl}demande_absence/all`).subscribe(
      (conges) => {
        this.allConges$.next(conges);
      },
      (error) => {
        this.allConges$.next([]);
      }
    )
  }

  getSingleConge(id : number){
    return this.httpClient.get(`${this.baseUrl}demande_absence/` + id)
  }

  modifyConge(id : number ,addCongesInterface : modifyCongesInterface){
    return this.httpClient.put(`${this.baseUrl}demande_absence/` + id, addCongesInterface)
  }

  validConge(id : number ,statut: string, conge:any){
    return this.httpClient.put(`${this.baseUrl}demande_absence/` + id, {id, statut, conge})
  }

  deleteConge(id: number){
    return this.httpClient.delete(`${this.baseUrl}demande_absence/`+id, {responseType: 'text'})
  }
}

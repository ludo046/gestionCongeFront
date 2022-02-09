import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { jourInterface, updateJourInterface } from 'src/app/Models/jour';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FerieService {

  private baseUrl = environment.baseUrl;
  allJours$ = new Subject<any>();

  constructor(private httpClient : HttpClient) { }

  addJour(jourInterface : jourInterface){
    return this.httpClient.post(`${this.baseUrl}jour_ferie`, jourInterface)
  }


  updateJour(updateJourInterface : updateJourInterface){
    return this.httpClient.put(`${this.baseUrl}jour_ferie/` + updateJourInterface.id, updateJourInterface)
  }

  getJours(){
    return this.httpClient.get(`${this.baseUrl}jour_ferie/all`).subscribe(
      (jours) => {
        this.allJours$.next(jours);
      },
      (error) => {
        this.allJours$.next([]);
      }
    )
  }

  deleteJour(id: number){
    return this.httpClient.delete(`${this.baseUrl}jour_ferie/`+id, {responseType: 'text'})
  }

}

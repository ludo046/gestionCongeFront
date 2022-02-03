import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { addEmployeModel, modifyEmployeModel } from 'src/app/Models/employe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private baseUrl = environment.baseUrl;
  allEmployes$ = new Subject<any>();

  constructor(private httpClient : HttpClient) { }

  addEmploye(addEmployeModel : addEmployeModel){
    return this.httpClient.post(`${this.baseUrl}collaborateur`, addEmployeModel)
  }

  getAllEmployes():void{
    this.httpClient.get(`${this.baseUrl}collaborateur/all`).subscribe(
      (employe) => {
        this.allEmployes$.next(employe);
      },
      (error) => {
        this.allEmployes$.next([]);
      }
    )
  }

  updateEmploye(modifyEmployeModel : modifyEmployeModel){
    return this.httpClient.put(`${this.baseUrl}collaborateur/` + modifyEmployeModel.id, modifyEmployeModel)
  }

  getOneEmploye(id : number):void{
    this.httpClient.get(`${this.baseUrl}collaborateur/` + id)
  }

  deleteEmploye(id: number){
    return this.httpClient.delete(`${this.baseUrl}collaborateur/`+id)
  }
}

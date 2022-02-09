import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeService } from 'src/app/Services/Employe/employe.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListEmployerComponent implements OnInit {

  public columnsToDisplay = ['id', 'nom', 'prenom'];
  public msg : string;
  public employeSub : Subscription;
  public employes : [];

  constructor(private employeService : EmployeService) { }

  ngOnInit(): void {
    this.employeSub = this.employeService.allEmployes$.subscribe(
      (employe) => {
        this.employes = employe;
      },
      error => {
        this.msg = error.message;
      }
    )
    this.employeService.getAllEmployes();
  }

}

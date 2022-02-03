import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestion-employes',
  templateUrl: './gestion-employes.component.html',
  styleUrls: ['./gestion-employes.component.scss']
})
export class GestionEmployesComponent implements OnInit {

  iconUser = faUsers;

  constructor() { }

  ngOnInit(): void {
  }

}

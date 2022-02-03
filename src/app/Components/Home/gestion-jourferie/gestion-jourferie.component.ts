import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gestion-jourferie',
  templateUrl: './gestion-jourferie.component.html',
  styleUrls: ['./gestion-jourferie.component.scss']
})
export class GestionJourferieComponent implements OnInit {

  public calendar = faCalendarAlt;

  constructor() { }

  ngOnInit(): void {
  }

}

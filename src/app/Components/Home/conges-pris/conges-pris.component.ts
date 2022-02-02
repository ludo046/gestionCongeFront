import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Subscription } from 'rxjs';
import { addCongesInterface } from 'src/app/Models/conges';
import { CongesService } from 'src/app/Services/Conges/conges.service';

@Component({
  selector: 'app-conges-pris',
  templateUrl: './conges-pris.component.html',
  styleUrls: ['./conges-pris.component.scss']
})
export class CongesPrisComponent implements OnInit {


  public congesSub: Subscription;
  public conges: addCongesInterface[];
  public msg: string;
  public Events =  [];
  calendarOptions: CalendarOptions;
  userId = JSON.parse(sessionStorage.getItem('user')).id
  color ;
  constructor(private congesService : CongesService) { }

  ngOnInit(): void {
    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => {
        for(let i = 0; i < conges.length; i++){
          if(conges[i].collaborateur.id === this.userId){
            if(conges[i].statut === 'INITIALE'){
              this.color = "#0035B9"
            }else if(conges[i].statut === 'ATTENTE_VALIDATION'){
              this.color = "#B97300"
            } else if(conges[i].statut === 'VALIDEE'){
              this.color = "#2099D6"
            } else {
              this.color = "#B97300"
            }
            const even = {
              title : conges[i].motifAbsence,
              start : conges[i].dateDebut,
              end : conges[i].dateFin,  
              backgroundColor: this.color,
              borderColor : this.color
            }
            this.Events.push(even)
          }
        }
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            locale: frLocale,
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridDay'
            },
            events: this.Events
          };
      },
      error => {
        this.msg = error;
      }
    )
    this.congesService.getConges();
    
    
  }

}

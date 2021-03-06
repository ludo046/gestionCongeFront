import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Subscription } from 'rxjs';
import { addCongesInterface } from 'src/app/Models/conges';
import { jourInterface } from 'src/app/Models/jour';
import { CongesService } from 'src/app/Services/Conges/conges.service';
import { FerieService } from 'src/app/Services/Ferie/ferie.service';
import * as XLSX from 'xlsx';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-planning-conges',
  templateUrl: './planning-conges.component.html',
  styleUrls: ['./planning-conges.component.scss']
})
export class PlanningCongesComponent implements OnInit {

  public congesSub: Subscription;
  public conges: addCongesInterface[];
  public msg: string;
  public Events =  [];
  public calendarOptions: CalendarOptions;
  public color ;
  private fileName= 'planning_conges.xlsx';
  public jourSub: Subscription;
  public jours: jourInterface[]; 

  public options: any = {
    chart: {
      type: 'column',
      height: 700
    },
    title: {
      text: 'Jours de congé par mois et par départements'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', "8", "9", "10", "11", "12","13", "14", "15", "16","17","18","19","20", '21', '22', '23', '24', '25', '26', '27', "28", "29", "30", "31"],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
    series: [{
      name: 'Production',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Expédition',
      data: [163, 203, 276, 408, 547, 729, 628]
  }]
  }


  constructor(private congesService : CongesService,
              private ferieService : FerieService) { }

  ngOnInit(): void {
    
    this.jourSub = this.ferieService.allJours$.subscribe(
      (jours) => {
        this.jours = jours;
        for(let i = 0; i < jours.length; i++){

            const even = {
              title : jours[i].libelle,
              start : jours[i].dateDebut,
              end : jours[i].dateFin,  
              backgroundColor: "#B6A800",
              borderColor : "#B6A800"
            }
            this.Events.push(even)         
        }
      },
      error => {
        this.msg = error.message;
      }
    )
    this.ferieService.getJours(); 

    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => {
        for(let i = 0; i < conges.length; i++){
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
              title : conges[i].collaborateur.nom + ' ' + conges[i].collaborateur.prenom,
              start : conges[i].dateDebut,
              end : conges[i].dateFin,  
              backgroundColor: this.color,
              borderColor : this.color
            }
            this.Events.push(even)
        }
        
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            locale: frLocale,
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,dayGridWeek,dayGridDay'
            },
            events: this.Events
          };
      },
      error => {
        this.msg = error.message;
      }
    )
    this.congesService.getConges();
    
    Highcharts.chart('graph', this.options);
  
  }

  exportexcel(): void 
  {
     let element = document.getElementById('calendar'); 
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     XLSX.writeFile(wb, this.fileName);
  }

}

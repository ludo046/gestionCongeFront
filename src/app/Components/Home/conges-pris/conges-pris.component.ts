import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Subscription } from 'rxjs';
import { jourInterface} from 'src/app/Models/jour';
import { CongesService } from 'src/app/Services/Conges/conges.service';
import { FerieService } from 'src/app/Services/Ferie/ferie.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-conges-pris',
  templateUrl: './conges-pris.component.html',
  styleUrls: ['./conges-pris.component.scss']
})
export class CongesPrisComponent implements OnInit {


  public congesSub: Subscription;
  public conges: any;
  public msg: string;
  public Events =  [];
  calendarOptions: CalendarOptions;
  userId = JSON.parse(sessionStorage.getItem('user')).id
  color ;
  fileName= 'ExcelSheet.xlsx';  
  public userSub
  public jourSub: Subscription;
  public jours: jourInterface[];

  constructor(private congesService : CongesService,
              private ferieService : FerieService) { }

  ngOnInit(): void {
    this.jourSub = this.ferieService.allJours$.subscribe(
      (jours) => {
        this.jours = jours;
        console.log(jours);
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
        this.msg = error;
      }
    )
    this.ferieService.getJours(); 

    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => { 
        console.log(conges);
        

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
            this.conges = conges[i]
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
          console.log(this.Events);
          
      },
      error => {
        this.msg = error;
      }
    )
    this.congesService.getConges();   
  }


  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('calendar'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
}


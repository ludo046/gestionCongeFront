import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import frLocale from '@fullcalendar/core/locales/fr';
import { Subscription } from 'rxjs';
import { addCongesInterface } from 'src/app/Models/conges';
import { CongesService } from 'src/app/Services/Conges/conges.service';
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
          console.log(this.conges); 
          
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


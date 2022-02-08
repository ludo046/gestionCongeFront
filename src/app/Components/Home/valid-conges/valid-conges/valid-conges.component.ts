import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { addCongesInterface } from 'src/app/Models/conges';
import { CongesService } from 'src/app/Services/Conges/conges.service';

@Component({
  selector: 'app-valid-conges',
  templateUrl: './valid-conges.component.html',
  styleUrls: ['./valid-conges.component.scss']
})
export class ValidCongesComponent implements OnInit {

  public congesSub: Subscription;
  public conges: addCongesInterface[];
  public msg: string;
  displayedColumns: string[] = ['Nom', 'Prenom', 'Type', 'Motif', 'Date de début', 'Date de fin', 'button'];
  public valid  = faCheckCircle;
  public notValid = faTimesCircle



  constructor(private congesService : CongesService) { }

  ngOnInit(): void {
    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => {
        this.conges = conges.filter(conge => conge.statut === "ATTENTE_VALIDATION")
        console.log(this.conges);
        
      },
      error => {
        this.msg = error;
      }
    )
    this.congesService.getConges();
  }

  validConge(conges : any){
    const id = conges.id
    const validate = {
      id : conges.id,
      dateDebut : new DatePipe('en').transform(conges.dateDebut, 'dd/MM/yyyy'),
      dateFin : new DatePipe('en').transform(conges.dateFin, 'dd/MM/yyyy'),
      typeAbsence : conges.typeAbsence,
      statut : "VALIDEE",
      motifAbsence: conges.motifAbsence,
      collaborateur : {
        id : conges.collaborateur.id
      },
    }
    console.log(validate);
    
    this.congesService.modifyConge(id, validate).subscribe(
      (valid) => {
        this.congesService.getConges()
      },
      err => {
        this.msg = err
      }
    )
  }

  rejectConge(conges : any){
    const id = conges.id
    const validate = {
      id : conges.id,
      dateDebut : new DatePipe('en').transform(conges.dateDebut, 'dd/MM/yyyy'),
      dateFin : new DatePipe('en').transform(conges.dateFin, 'dd/MM/yyyy'),
      typeAbsence : conges.typeAbsence,
      statut : "REJETEE",
      motifAbsence: conges.motifAbsence,
      collaborateur : {
        id : conges.collaborateur.id
      },
    }
    console.log(validate);
    
    this.congesService.modifyConge(id, validate).subscribe(
      (valid) => {
        this.congesService.getConges()
      },
      err => {
        this.msg = err
      }
    )
  }

}
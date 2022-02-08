import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { addCongesInterface } from 'src/app/Models/conges';
import { CongesService } from 'src/app/Services/Conges/conges.service';

@Component({
  selector: 'app-modify-conges',
  templateUrl: './modify-conges.component.html',
  styleUrls: ['./modify-conges.component.scss']
})
export class ModifyCongesComponent implements OnInit {

  public congesSub: Subscription;
  public conges: addCongesInterface[];
  public msg : string;
  public modifyCongeForm : FormGroup;
  public singleConge;
  private userId = JSON.parse(sessionStorage.getItem('user')).id
  public select

  constructor(private congesService : CongesService,
              private formBuilder : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {
    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => {
        
        this.conges =  conges.filter(conges => conges.collaborateur.id === this.userId && conges.statut === "INITIALE")
        for(let i = 0; i < this.conges.length; i++){
          this.conges[i].dateDebut = new DatePipe('en').transform(this.conges[i].dateDebut, 'dd/MM/yyyy')
          this.conges[i].dateFin = new DatePipe('en').transform(this.conges[i].dateFin, 'dd/MM/yyyy')
        }
        console.log(conges);
        
      },
      error => {
        this.msg = error;
      }
    )
    this.congesService.getConges();

    this.modifyCongeForm = this.formBuilder.group({
      id : this.formBuilder.control("", Validators.required),
      dateDebut : this.formBuilder.control("", Validators.required),
      dateFin : this.formBuilder.control("", Validators.required),
      typeAbsence : this.formBuilder.control("", Validators.required),
      motifAbsence : this.formBuilder.control("", Validators.required)
    })
  }

  getSingleConge(){
    const id = this.modifyCongeForm.get("id").value
    console.log(id);

    this.congesService.getSingleConge(id).subscribe(
      result => {
        
        this.singleConge = result
        console.log(this.singleConge.dateDebut);
      }
    )
  }

  modifyConge(){
    const id = this.modifyCongeForm.get("id").value
    const conge = {
      collaborateur : {
        id : JSON.parse(sessionStorage.getItem('user')).id
      },
      id : this.modifyCongeForm.get("id").value,
      dateDebut : new DatePipe('en').transform(this.modifyCongeForm.get("dateDebut").value, 'dd/MM/yyyy') ,
      dateFin : new DatePipe('en').transform(this.modifyCongeForm.get("dateFin").value, 'dd/MM/yyyy'),
      typeAbsence : this.modifyCongeForm.get("typeAbsence").value,
      motifAbsence : this.modifyCongeForm.get("motifAbsence").value
    }

    console.log(id);
    console.log(conge);
    
    

    this.congesService.modifyConge(id , conge).subscribe(
      result => {

        this.msg = "Modification de congé bien pris en compte"
        setTimeout(() => {
           this.msg = ""
           this.router.navigate(["/congespris"])
        }, 2000);
      },
      error => {
        this.msg = error.message
        setTimeout(() => {
          this.msg = ""
       }, 2000);
      }
    )
  }

  selectConge(conge){
    this.select = conge
    console.log(this.select);
    
  }

}

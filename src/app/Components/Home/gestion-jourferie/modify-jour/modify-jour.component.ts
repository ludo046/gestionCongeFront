import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updateJourInterface } from 'src/app/Models/jour';
import { FerieService } from 'src/app/Services/Ferie/ferie.service';

@Component({
  selector: 'app-modify-jour',
  templateUrl: './modify-jour.component.html',
  styleUrls: ['./modify-jour.component.scss']
})
export class ModifyJourComponent implements OnInit {

  public modifyjour : FormGroup;
  public msg : string;
  public jourSub: Subscription;
  public jours: updateJourInterface[];

  constructor(private formBuilder : FormBuilder,
              private ferieService : FerieService) { }

  ngOnInit(): void {
    this.jourSub = this.ferieService.allJours$.subscribe(
      (jours) => {
        this.jours = jours;
        console.log(jours);
        
      },
      error => {
        this.msg = error;
      }
    )
    this.ferieService.getJours();


    this.modifyjour = this.formBuilder.group({
      id : this.formBuilder.control("", Validators.required), 
      dateDebut : this.formBuilder.control("", Validators.required),
      dateFin : this.formBuilder.control("", Validators.required),
      libelle : this.formBuilder.control("", Validators.required),
    })
  }

  updateJour(){
    const jour = { 
      id : this.modifyjour.get("id").value,
      dateDebut : new DatePipe('en').transform(this.modifyjour.get("dateDebut").value, 'dd/MM/yyyy') ,
      dateFin : new DatePipe('en').transform(this.modifyjour.get("dateFin").value, 'dd/MM/yyyy'),
      libelle : this.modifyjour.get("libelle").value
    }
    console.log(jour);
    

    this.ferieService.updateJour(jour).subscribe(
      result => {

        this.msg = "modification de congé bien pris en compte"
        setTimeout(() => {
           this.msg = ""
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

}

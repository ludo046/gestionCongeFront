import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FerieService } from 'src/app/Services/Ferie/ferie.service';

@Component({
  selector: 'app-add-jour',
  templateUrl: './add-jour.component.html',
  styleUrls: ['./add-jour.component.scss']
})
export class AddJourComponent implements OnInit {

  public addJourForm : FormGroup;
  public msg : string;

  constructor(private formBuilder : FormBuilder,
              private ferieService : FerieService,
              private router : Router) { }

  ngOnInit(): void {
    this.addJourForm = this.formBuilder.group({
      dateDebut : this.formBuilder.control("", Validators.required),
      dateFin : this.formBuilder.control("", Validators.required),
      libelle : this.formBuilder.control("", Validators.required),
    })
  }

  addJour(){

    const addJour = {
      dateDebut : new DatePipe('en').transform(this.addJourForm.get("dateDebut").value, 'dd/MM/yyyy') ,
      dateFin : new DatePipe('en').transform(this.addJourForm.get("dateFin").value, 'dd/MM/yyyy'),
      libelle : this.addJourForm.get("libelle").value,
    }
 
    
    this.ferieService.addJour(addJour).subscribe(
      () => {
        this.msg = "ajout de jour ferié bien pris en compte"
        setTimeout(() => {
           this.msg = ""
           this.router.navigate(["/planningconges"])
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

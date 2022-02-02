import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CongesService } from 'src/app/Services/Conges/conges.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-conges',
  templateUrl: './add-conges.component.html',
  styleUrls: ['./add-conges.component.scss']
})
export class AddCongesComponent implements OnInit {

  public addCongesForm : FormGroup
  public msg : string

  constructor(private formBuilder : FormBuilder,
              private congesService : CongesService,
              ) { }

  ngOnInit(): void {
    this.addCongesForm = this.formBuilder.group({
      dateDebut : this.formBuilder.control("", Validators.required),
      dateFin : this.formBuilder.control("", Validators.required),
      type : this.formBuilder.control("", Validators.required),
      motif : this.formBuilder.control("")
    })
    
  }

  addConges(){

    const addConges = {
      collaborateur : {
        id : JSON.parse(sessionStorage.getItem('user')).id
      },
      dateDebut : new DatePipe('en').transform(this.addCongesForm.get("dateDebut").value, 'dd/MM/yyyy') ,
      dateFin : new DatePipe('en').transform(this.addCongesForm.get("dateFin").value, 'dd/MM/yyyy'),
      typeAbsence : this.addCongesForm.get("type").value,
      motifAbsence : this.addCongesForm.get("motif").value
    }

    console.log(addConges);

 
    
    this.congesService.addConges(addConges).subscribe(
      result => {

        this.msg = "demande de congé bien pris en compte"
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

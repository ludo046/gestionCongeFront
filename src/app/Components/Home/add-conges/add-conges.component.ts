import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CongesService } from 'src/app/Services/Conges/conges.service';

@Component({
  selector: 'app-add-conges',
  templateUrl: './add-conges.component.html',
  styleUrls: ['./add-conges.component.scss']
})
export class AddCongesComponent implements OnInit {

  public addCongesForm : FormGroup

  constructor(private formBuilder : FormBuilder,
              private congesService : CongesService) { }

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
      idCollaborateur : 1,
      dateDebut : this.addCongesForm.get("dateDebut").value,
      dateFin : this.addCongesForm.get("dateFin").value,
      type : this.addCongesForm.get("type").value,
      motif : this.addCongesForm.get("motif").value
    }

    this.congesService.addConges(addConges)
  }

}

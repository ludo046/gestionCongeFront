import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { updateJourInterface } from 'src/app/Models/jour';
import { FerieService } from 'src/app/Services/Ferie/ferie.service';

@Component({
  selector: 'app-delete-jour',
  templateUrl: './delete-jour.component.html',
  styleUrls: ['./delete-jour.component.scss']
})
export class DeleteJourComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,
              private ferieService : FerieService,
              private router : Router) { }

  public deletejourForm : FormGroup;
  public msg : string;
  public jourSub: Subscription;
  public jours: updateJourInterface[];


  ngOnInit(): void {
    this.jourSub = this.ferieService.allJours$.subscribe(
      (jours) => {
        this.jours = jours;
      },
      error => {
        this.msg = error.message;
      }
    )
    this.ferieService.getJours();

    this.deletejourForm = this.formBuilder.group({
      id : this.formBuilder.control('', Validators.required)
    })
  }

  deleteJour(){
    const id = this.deletejourForm.get("id").value
    
    this.ferieService.deleteJour(id).subscribe(
      result => {
        if(result){
          this.msg = "Jour férié bien supprimé";
          this.ferieService.getJours();
          setTimeout(() => {
            this.router.navigate(["/planningconges"])
            this.msg = ""
         }, 2000);
        }
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

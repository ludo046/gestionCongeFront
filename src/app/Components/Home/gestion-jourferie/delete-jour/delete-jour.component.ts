import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
              private ferieService : FerieService) { }

  public deletejourForm : FormGroup;
  public msg : string;
  public jourSub: Subscription;
  public jours: updateJourInterface[];


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

    this.deletejourForm = this.formBuilder.group({
      id : this.formBuilder.control('', Validators.required)
    })
  }

  deleteJour(){
    const id = this.deletejourForm.get("id").value

    console.log(id);
    
    this.ferieService.deleteJour(id).subscribe(
      result => {
        if(result){
          this.msg = "employé bien supprimé";
          this.ferieService.getJours();
          console.log(this.msg);
          
          setTimeout(() => {
            this.msg = ""
         }, 100000);
        }
      },
      error => {
        this.msg = JSON.stringify(error.message)
        console.log(this.msg);
        
        setTimeout(() => {
          this.msg = ""
       }, 2000);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CongesService } from 'src/app/Services/Conges/conges.service';

@Component({
  selector: 'app-delete-conge',
  templateUrl: './delete-conge.component.html',
  styleUrls: ['./delete-conge.component.scss']
})
export class DeleteCongeComponent implements OnInit {
  public congesSub: Subscription;
  public conges = [];
  public msg: string;
  private userId = JSON.parse(sessionStorage.getItem('user')).id;
  public deleteCongeForm : FormGroup;

  constructor(private congesService : CongesService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.congesSub = this.congesService.allConges$.subscribe(
      (conges) => {
        
        for(let i = 0; i < conges.length; i++){
          if(conges[i].collaborateur.id === this.userId){
            if(conges[i].statut === 'INITIALE'){
              this.conges.push(conges[i])
            }

          }
      }
    },
    error => {
      this.msg = error;
    }
    )
    this.congesService.getConges();
       

    this.deleteCongeForm = this.formBuilder.group({
      id : this.formBuilder.control('', Validators.required)
    })
  }

  deleteConge(){
    const id = this.deleteCongeForm.get("id").value

    console.log(id);
    
    this.congesService.deleteConge(id).subscribe(
      result => {
        if(result){
          this.msg = "employé bien supprimé";
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

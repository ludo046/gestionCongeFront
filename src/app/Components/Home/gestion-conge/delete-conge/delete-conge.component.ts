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

  constructor(private congesService : CongesService,
              ) { }

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
  }

  deleteConge(id){
    this.congesService.deleteConge(id).subscribe(
      () => {
        this.msg = "Demande de congés supprimé"
        window.location.reload()
        setTimeout(() => {
          this.msg = ""
        }, 2000);
      },
      err => {
        this.msg = "Une erreur c'est produite"
        setTimeout(() => {
          this.msg = ""
        }, 5000);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { addEmployeModel } from 'src/app/Models/employe';
import { EmployeService } from 'src/app/Services/Employe/employe.service';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent implements OnInit {

public addEmployeForm : FormGroup;
public msg : string;
public employeSub : Subscription;
public employes : [];
public select;


  constructor(private formBuilder : FormBuilder,
              private employeService : EmployeService,
              private router : Router) { }

  ngOnInit(): void {
    this.employeSub = this.employeService.allEmployes$.subscribe(
      (employe) => {
        this.employes = employe;     
      },
      error => {
        this.msg = error;
      }
    )
    this.employeService.getAllEmployes();
   
    this.addEmployeForm = this.formBuilder.group({
      nom : this.formBuilder.control('', Validators.required),
      prenom : this.formBuilder.control('', Validators.required),
      identifiant : this.formBuilder.control('', Validators.required),
      motDePasse : this.formBuilder.control('', Validators.required),
      manager : this.formBuilder.control('')
    })


  }
  selectManager(manager){
    this.select = manager
  }

  addEmploye(){
    const newEmploye = {
      nom : this.addEmployeForm.get("nom").value,
      prenom : this.addEmployeForm.get("prenom").value,
      identifiant : this.addEmployeForm.get("identifiant").value,
      motDePasse : this.addEmployeForm.get("motDePasse").value,
      role : 'SALARIE',
      manager : this.select
    }
    this.employeService.addEmploye(newEmploye).subscribe(
      () => {
        this.msg = "employé bien créé"
        setTimeout(() => {
           this.msg = ""
           this.router.navigate(["/listemploye"])
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

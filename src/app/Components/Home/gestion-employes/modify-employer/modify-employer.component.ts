import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeService } from 'src/app/Services/Employe/employe.service';

@Component({
  selector: 'app-modify-employer',
  templateUrl: './modify-employer.component.html',
  styleUrls: ['./modify-employer.component.scss']
})
export class ModifyEmployerComponent implements OnInit {

  public addEmployeForm : FormGroup;
  public msg : string;
  public employeSub : Subscription;
  public employes : [];
  public select;
  public manager;

  constructor(private formBuilder : FormBuilder,
              private employeService : EmployeService,
              private router : Router) { }

  ngOnInit(): void {
    this.employeSub = this.employeService.allEmployes$.subscribe(
      (employe) => {
        this.employes = employe;
      },
      error => {
        this.msg = error.message;
      }
    )
    this.employeService.getAllEmployes();

    this.addEmployeForm = this.formBuilder.group({
      id : this.formBuilder.control('', Validators.required),
      nom : this.formBuilder.control('', Validators.required),
      prenom : this.formBuilder.control('', Validators.required),
      identifiant : this.formBuilder.control('', Validators.required),
      motDePasse : this.formBuilder.control('', Validators.required),
      manager : this.formBuilder.control('', Validators.required)
    })
  }
  selectEmploye(employe){
    this.select = employe
  }

  selectManager(manager){
    this.manager = manager
  }

  addEmploye(){
    const newEmploye = {
      id : JSON.parse(this.addEmployeForm.get("id").value),
      nom : this.addEmployeForm.get("nom").value,
      prenom : this.addEmployeForm.get("prenom").value,
      identifiant : this.addEmployeForm.get("identifiant").value,
      motDePasse : this.addEmployeForm.get("motDePasse").value,
      manager : this.manager
    }
    this.employeService.updateEmploye(newEmploye).subscribe(
      () => {
        this.msg = "modification bien prise en compte"
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

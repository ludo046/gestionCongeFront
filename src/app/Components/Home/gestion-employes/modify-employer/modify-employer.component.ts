import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder : FormBuilder,
              private employeService : EmployeService) { }

  ngOnInit(): void {
    this.employeSub = this.employeService.allEmployes$.subscribe(
      (employe) => {
        this.employes = employe;
        console.log(employe);
        
      },
      error => {
        this.msg = error;
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

  addEmploye(){
    const newEmploye = {
      id : JSON.parse(this.addEmployeForm.get("id").value),
      nom : this.addEmployeForm.get("nom").value,
      prenom : this.addEmployeForm.get("prenom").value,
      identifiant : this.addEmployeForm.get("identifiant").value,
      motDePasse : this.addEmployeForm.get("motDePasse").value,
      manager : JSON.parse(this.addEmployeForm.get("manager").value)
    }
    console.log(newEmploye);
    

    this.employeService.updateEmploye(newEmploye).subscribe(
      result => {
        this.msg = "employé bien créé"
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

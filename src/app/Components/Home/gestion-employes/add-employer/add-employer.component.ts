import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nom : this.formBuilder.control('', Validators.required),
      prenom : this.formBuilder.control('', Validators.required),
      identifiant : this.formBuilder.control('', Validators.required),
      motDePasse : this.formBuilder.control('', Validators.required),
      //manager : this.formBuilder.control('')
    })


  }

  addEmploye(){
    const newEmploye = {
      nom : this.addEmployeForm.get("nom").value,
      prenom : this.addEmployeForm.get("prenom").value,
      identifiant : this.addEmployeForm.get("identifiant").value,
      motDePasse : this.addEmployeForm.get("motDePasse").value,
      //manager : this.addEmployeForm.get("manager").value
    }
    console.log(newEmploye);
    

    this.employeService.addEmploye(newEmploye).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeService } from 'src/app/Services/Employe/employe.service';

@Component({
  selector: 'app-delete-employer',
  templateUrl: './delete-employer.component.html',
  styleUrls: ['./delete-employer.component.scss']
})
export class DeleteEmployerComponent implements OnInit {
  public deleteEmployeForm : FormGroup;
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

    this.deleteEmployeForm = this.formBuilder.group({
      id : this.formBuilder.control('', Validators.required)
    })
  }

  deleteEmploye(){
    const id = this.deleteEmployeForm.get("id").value

    console.log(id);
    
    this.employeService.deleteEmploye(id).subscribe(
      result => {
        if(result){
          this.msg = "employé bien supprimé";
          this.employeService.getAllEmployes();
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

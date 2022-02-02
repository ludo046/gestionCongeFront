import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/Auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;
  public powerOff = faPowerOff;
  public hide = true;
  public loginForm : FormGroup;
  public msg : string;

  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router : Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      identifiant : this.formBuilder.control("", Validators.required),
      motDePasse : this.formBuilder.control("", Validators.required) 
    })
  }

  login(){
    const login = {
      username : this.loginForm.get("identifiant").value,
      password : this.loginForm.get("motDePasse").value
    }

    this.authService.login(login).subscribe(
      result => {
        //console.log(result);
        //sessionStorage.setItem('user', JSON.stringify(result))
        this.msg = "vous allez etre redirigé vers la page d'acceuil "
        setTimeout(() => {
           this.msg = ""
           this.router.navigate(['/home'])
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

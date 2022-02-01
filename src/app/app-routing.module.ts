import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AddCongesComponent } from './Components/Home/add-conges/add-conges.component';
import { CongesPrisComponent } from './Components/Home/conges-pris/conges-pris.component';
import { AddEmployerComponent } from './Components/Home/gestion-employes/add-employer/add-employer.component';
import { DeleteEmployerComponent } from './Components/Home/gestion-employes/delete-employer/delete-employer.component';
import { GestionEmployesComponent } from './Components/Home/gestion-employes/gestion-employes.component';
import { ModifyEmployerComponent } from './Components/Home/gestion-employes/modify-employer/modify-employer.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ModifyCongesComponent } from './Components/Home/modify-conges/modify-conges.component';
import { PlanningCongesComponent } from './Components/Home/planning-conges/planning-conges.component';

const routes: Routes = [
  {path : 'login',component: LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'addconges', component : AddCongesComponent},
  {path : 'modifyconges', component : ModifyCongesComponent},
  {path : 'congespris', component : CongesPrisComponent},
  {path : 'planningconges', component : PlanningCongesComponent},
  {path : 'gestionemployes', component : GestionEmployesComponent},
  {path : 'addemploye', component : AddEmployerComponent},
  {path : 'modifyemploye', component: ModifyEmployerComponent},
  {path : 'deleteemploye', component : DeleteEmployerComponent},
  {path : '', component: LoginComponent},
  {path : '**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AddCongesComponent } from './Components/Home/add-conges/add-conges.component';
import { CongesPrisComponent } from './Components/Home/conges-pris/conges-pris.component';
import { DeleteCongeComponent } from './Components/Home/gestion-conge/delete-conge/delete-conge.component';
import { GestionCongeComponent } from './Components/Home/gestion-conge/gestion-conge/gestion-conge.component';
import { AddEmployerComponent } from './Components/Home/gestion-employes/add-employer/add-employer.component';
import { DeleteEmployerComponent } from './Components/Home/gestion-employes/delete-employer/delete-employer.component';
import { GestionEmployesComponent } from './Components/Home/gestion-employes/gestion-employes.component';
import { ListEmployerComponent } from './Components/Home/gestion-employes/list-employer/list-employer.component';
import { ModifyEmployerComponent } from './Components/Home/gestion-employes/modify-employer/modify-employer.component';
import { AddJourComponent } from './Components/Home/gestion-jourferie/add-jour/add-jour.component';
import { DeleteJourComponent } from './Components/Home/gestion-jourferie/delete-jour/delete-jour.component';
import { GestionJourferieComponent } from './Components/Home/gestion-jourferie/gestion-jourferie.component';
import { ModifyJourComponent } from './Components/Home/gestion-jourferie/modify-jour/modify-jour.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ModifyCongesComponent } from './Components/Home/modify-conges/modify-conges.component';
import { PlanningCongesComponent } from './Components/Home/planning-conges/planning-conges.component';
import { ShowCongeComponent } from './Components/Home/show-conge/show-conge/show-conge.component';
import { ValidCongesComponent } from './Components/Home/valid-conges/valid-conges/valid-conges.component';

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
  {path : 'listemploye', component : ListEmployerComponent},
  {path : 'gestionconges', component : GestionCongeComponent},
  {path : 'showconges', component : ShowCongeComponent},
  {path : 'deleteconges', component: DeleteCongeComponent},
  {path : 'gestionjourferie', component: GestionJourferieComponent},
  {path : 'addjourferier', component: AddJourComponent},
  {path : 'modifyjourferier', component: ModifyJourComponent},
  {path : 'deletejourferier', component : DeleteJourComponent},
  {path : 'validconges', component : ValidCongesComponent},
  {path : '', component: LoginComponent},
  {path : '**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

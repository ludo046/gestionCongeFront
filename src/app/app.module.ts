import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { AddCongesComponent } from './Components/Home/add-conges/add-conges.component';
import { ConnectComponent } from './Components/Auth/connect/connect.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MAT_DATE_LOCALE, NativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ModifyCongesComponent } from './Components/Home/modify-conges/modify-conges.component';
import { GestionEmployesComponent } from './Components/Home/gestion-employes/gestion-employes.component';
import { AddEmployerComponent } from './Components/Home/gestion-employes/add-employer/add-employer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModifyEmployerComponent } from './Components/Home/gestion-employes/modify-employer/modify-employer.component';
import { DeleteEmployerComponent } from './Components/Home/gestion-employes/delete-employer/delete-employer.component';
import { CongesPrisComponent } from './Components/Home/conges-pris/conges-pris.component';
import { PlanningCongesComponent } from './Components/Home/planning-conges/planning-conges.component';
import { AuthInterceptor } from './auth-interceptor';
import { ListEmployerComponent } from './Components/Home/gestion-employes/list-employer/list-employer.component';
import { GestionCongeComponent } from './Components/Home/gestion-conge/gestion-conge/gestion-conge.component';
import { ShowCongeComponent } from './Components/Home/show-conge/show-conge/show-conge.component';
import { DeleteCongeComponent } from './Components/Home/gestion-conge/delete-conge/delete-conge.component';
import { GestionJourferieComponent } from './Components/Home/gestion-jourferie/gestion-jourferie.component';
import { AddJourComponent } from './Components/Home/gestion-jourferie/add-jour/add-jour.component';
import { ModifyJourComponent } from './Components/Home/gestion-jourferie/modify-jour/modify-jour.component';
import { DeleteJourComponent } from './Components/Home/gestion-jourferie/delete-jour/delete-jour.component';



FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectComponent,
    HomeComponent,
    AddCongesComponent,
    ModifyCongesComponent,
    GestionEmployesComponent,
    AddEmployerComponent,
    ModifyEmployerComponent,
    DeleteEmployerComponent,
    CongesPrisComponent,
    PlanningCongesComponent,
    ListEmployerComponent,
    GestionCongeComponent,
    ShowCongeComponent,
    DeleteCongeComponent,
    GestionJourferieComponent,
    AddJourComponent,
    ModifyJourComponent,
    DeleteJourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FullCalendarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    NativeDateModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
    
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, HttpClient, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

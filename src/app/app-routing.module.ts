import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { PatientsComponent } from './components/patients/patients.component';
import { AddEditPatientComponent } from './components/add-edit-patient/add-edit-patient.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path:'añadir', component: AddEditPatientComponent},
  { path:'editar/:id', component: AddEditPatientComponent},
  { path:'patient/:id', component: PatientDetailsComponent},
  { path: 'equipo', component: EmployeesComponent },
  { path: 'citas', component: AppointmentsComponent },
  { path: 'login', component: LoginComponent },



  { path:'**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

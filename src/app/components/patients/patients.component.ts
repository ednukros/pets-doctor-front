import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientsService } from 'src/app/services/patients-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  listPatients: Patient[] = []

  constructor(private _patientService: PatientsService, private toastr: ToastrService) {



  }

  ngOnInit(): void {
    this.getListPatients();
  }

  getListPatients() {
    this._patientService.getPatients().subscribe((data: Patient[]) => {
      this.listPatients = data;
    })
  }

  deletePatient(id: number) {
    this._patientService.deletePatient(id).subscribe(() => {

        this.getListPatients();
        this.toastr.warning('El paciente eliminado con éxito', 'Paciente eliminado')

    })
    
   
  
  }
}

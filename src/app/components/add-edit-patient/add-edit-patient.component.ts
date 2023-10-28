import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Patient } from 'src/app/interfaces/patient';
import { PatientsService } from 'src/app/services/patients-service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private _patientService: PatientsService, private toastr: ToastrService, private router: Router ) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      owner: ['', Validators.required],
      phoneNumber: [null, Validators.required],
      email: ['', Validators.required],


    })
  }
  ngOnInit(): void {

  }

  addPatient() {
   
    const patient: Patient = {
      name: this.form.value.name,
      species: this.form.value.specie,
      race: this.form.value.race,
      birth: this.form.value.birth,
      image: this.form.value.image,
      next_appointment: this.form.value.appointment,
      owner: this.form.value.owner,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
    }
    
    this._patientService.createPatient(patient).subscribe(() => {
      this.toastr.success('El paciente ha sido guardado con éxito', 'Paciente guardado')
      this.router.navigate(['/'])
      
    })
    
  }
}

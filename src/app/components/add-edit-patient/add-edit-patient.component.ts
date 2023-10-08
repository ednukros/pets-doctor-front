import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Patient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {

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
      specie: this.form.value.specie,
      birth: this.form.value.birth,
      image: this.form.value.image,
      appointment: this.form.value.appointment,
      owner: this.form.value.owner,
      phoneNumber: this.form.value.phoneNumber,
      email: this.form.value.email,
    }
    
    console.log(patient);
    
  }
}

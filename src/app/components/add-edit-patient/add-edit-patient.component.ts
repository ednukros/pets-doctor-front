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
    // const patient: Patient = {
    //   id:
    // }
    console.log(this.form);
    
  }
}

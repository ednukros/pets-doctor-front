import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Patient } from 'src/app/interfaces/patient';
import { PatientsService } from 'src/app/services/patients-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-patient',
  templateUrl: './add-edit-patient.component.html',
  styleUrls: ['./add-edit-patient.component.css']
})
export class AddEditPatientComponent implements OnInit {

  form: FormGroup;
  id: number;
  task: String = "Agregar "

  constructor(private fb: FormBuilder, private _patientService: PatientsService, private toastr: ToastrService, private router: Router, private aRouter: ActivatedRoute) {




    this.form = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      race: ['', Validators.required],
      next_appointment: ['', Validators.required],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'), // Valida que solo se permitan dígitos.
          Validators.minLength(9),
          Validators.maxLength(9),
        ],
      ]


    });

    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    //   species:['', Validators.required],
    //   race:['', Validators.required],
    //   next_appointment:['', Validators.required],
    //   phoneNumber:[ '', Validators.required]




    // })

    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }
  ngOnInit(): void {
    if (this.id != 0) {
      this.task = "Editar "
      this.getPatient(this.id)
    }

  }

  getPatient(id: number) {
    this._patientService.getPatient(id).subscribe((data: Patient) => {
      this.form.setValue({
        name: data.name,
        species: data.species,
        race: data.race,
        next_appointment: data.next_appointment,
        phoneNumber: data.phoneNumber



      })

    })

  }

  addPatient() {

    const patient: Patient = {
      name: this.form.value.name,
      species: this.form.value.species,
      race: this.form.value.race,
      next_appointment: this.form.value.next_appointment,
      phoneNumber: this.form.value.phoneNumber

    }

    if (this.id !== 0) {
      patient.id = this.id;
      this._patientService.updatePatient(this.id, patient).subscribe(() => {
        this.toastr.success('El paciente ha sido actualizado con éxito', 'Paciente actualizado')
        this.router.navigate(['/'])

      })

    } else {
      this._patientService.createPatient(patient).subscribe(() => {
        this.toastr.success('El paciente ha sido guardado con éxito', 'Paciente guardado')
        this.router.navigate(['/'])


      })
    }



  }
}

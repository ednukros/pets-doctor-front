import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/services/patients-service';
import { Patient } from 'src/app/interfaces/patient';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  id: number;
  patient: any;

  constructor(private _patientsService: PatientsService, private aRouter: ActivatedRoute ){
    this.id = Number(aRouter.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.getPatient(this.id)
  }

  getPatient(id: number) {
    this._patientsService.getPatient(id).subscribe((data: Patient) => {
     console.log(data);
     this.patient = data

    })

  }
}

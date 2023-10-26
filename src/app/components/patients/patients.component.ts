import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientsService } from 'src/app/services/patients-service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  listPatients: Patient[] = [
    {
      id: 1234,
      name: 'Luffy',
      specie: 'gato',
      birth: new Date(2021, 5, 2),
      image: '',
      appointment: new Date(2023, 5, 2),
      owner: 'Inma Sánchez',
      phoneNumber: +34633396600,
      email: 'isanmenarguez@gmail.com',
    },
    {
      id: 5678,
      name: 'Vera',
      specie: 'gato',
      birth: new Date(2021, 5, 2),
      image: '',
      appointment: new Date(2023, 5, 2),
      owner: 'Cristina Cecilia',
      phoneNumber: +34633396600,
      email: 'isanmenarguez@gmail.com',
    },
  ]

  constructor(private _patientService: PatientsService) {



  }

  ngOnInit(): void {
    this.getListPatients();
  }

  getListPatients(){
    this._patientService.getPatients().subscribe((data) =>{
      console.log(data);
      
    })
  }
}

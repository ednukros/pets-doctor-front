import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentsService } from 'src/app/services/appointments-service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  listAppointments: Appointment[] = []

  constructor(private _appointmentService: AppointmentsService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.getListAppointments();
    setTimeout(() => {
      this.applyClass()
    }, 1000);

  }


  getListAppointments() {
    this._appointmentService.getAppointments().subscribe((data: Appointment[]) => {
      this.listAppointments = data;
      console.log(data);
      

    })
  }

  deleteAppointment(id: number) {
    this._appointmentService.deleteAppointment(id).subscribe(() => {

      this.getListAppointments();
      this.toastr.warning('El paciente eliminado con éxito', 'Paciente eliminado')

    })



  }

  applyClass() {
    const tableElement = document.getElementsByClassName("tr-data");

    this.listAppointments.forEach((appointment, index) => {
      if (index % 2 == 0) {
        tableElement[index].className += " bg-light";
        console.log(tableElement)
      }
    });
  }
}

  



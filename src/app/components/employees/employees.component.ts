import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeesService } from 'src/app/services/employees-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  listEmployees: Employee[] = []

  constructor(private _employeeService: EmployeesService, private toastr: ToastrService) {
}
  ngOnInit(): void {
    this.getListEmployees();
  }

  getListEmployees() {
    this._employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.listEmployees = data;
      console.log(this.listEmployees);
      
    })
  }

  deleteEmployee(id: number) {
    this._employeeService.deleteEmployee(id).subscribe(() => {

        this.getListEmployees();
        this.toastr.warning('El paciente eliminado con éxito', 'Paciente eliminado')

    })
    
   
  
  }
}

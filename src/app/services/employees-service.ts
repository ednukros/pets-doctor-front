import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'employees/'
   }

   getEmployees(): Observable<Employee[]>{

    return this.http.get<Employee[]>(`${this.myAppUrl}${this.myApiUrl}`)

   }

   deleteEmployee(id: number): Observable<void>{

    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)

   }

  //  editEmployee(id:number): Observable<Employee[]> {

  //   return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`)
  //  }

  createEmployee(employee: Employee): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, employee)
  }

  getEmployee(id: number): Observable<Employee>{

    return this.http.get<Employee>(`${this.myAppUrl}${this.myApiUrl}${id}`)

  }

  updateEmployee(id:number, employee: Employee): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, employee)
  }

}

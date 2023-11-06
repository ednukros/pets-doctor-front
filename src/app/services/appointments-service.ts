import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from 'src/app/interfaces/appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'appointments/'
   }

   getAppointments(): Observable<Appointment[]>{

    return this.http.get<Appointment[]>(`${this.myAppUrl}${this.myApiUrl}`)

   }

   deleteAppointment(id: number): Observable<void>{

    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)

   }

  //  editAppointment(id:number): Observable<Appointment[]> {

  //   return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`)
  //  }

  createAppointment(appointment: Appointment): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, appointment)
  }

  getAppointment(id: number): Observable<Appointment>{

    return this.http.get<Appointment>(`${this.myAppUrl}${this.myApiUrl}${id}`)

  }

  updateAppointment(id:number, appointment: Appointment): Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, appointment)
  }

}

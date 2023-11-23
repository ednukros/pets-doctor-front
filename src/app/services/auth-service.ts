
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Employee } from '../interfaces/employee';




// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//     private myAppUrl: string;
//   private myApiUrl: string;

//   constructor(private http: HttpClient) {
//     this.myAppUrl = environment.endpoint;
//     this.myApiUrl = 'employees/'
//   }

//   login(username: string, password: string): Observable<any> {
//     return this.http.post(
//       this.myAppUrl+this.myApiUrl + 'login',
//       {
//         username,
//         password,
//       },
//       httpOptions
//     );
//   }

  
  

//   logout(): Observable<any> {
//     return this.http.post(AUTH_API + 'signout', { }, httpOptions);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiEndPoint } from 'src/app/constants/constants';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private http: HttpClient) {}

  // login(data): Observable < any > {
  //   return this.http.post < any > (apiEndPoint.login, data);
  // }
}

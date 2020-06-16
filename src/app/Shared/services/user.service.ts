import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiEndPoint } from 'src/app/constants/constants';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}

  getUserList(): Observable < any > {
    //return this.http.get < any > (apiEndPoint.userList);
    return this.http.get('assets/jsonData/userList.json');
  }

  // getUserDetail(userId): Observable < any > {
  //   let url = apiEndPoint.userDetail + userId
  //   return this.http.get(url);
  // }
}

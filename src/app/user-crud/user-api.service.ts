import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/userss').pipe(retry(1), catchError(this.handleError));
  }

  getOneUser(id: any): Observable<User> {
    return this.http.get<User>(this.apiURL + '/userss' + id).pipe(retry(1), catchError(this.handleError));
  }

  createUser(user: any): Observable<User> {
    return this.http.post<User>(this.apiURL + '/userss', JSON.stringify(user), this.httpOption).pipe(retry(1), catchError(this.handleError));
  }

  updateUser(id: any, user: any): Observable<User> {
    return this.http.put<User>(this.apiURL + '/userss' + id, JSON.stringify(user), this.httpOption).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errMsg = '';
    if (error.error instanceof ErrorEvent) errMsg = error.error.message;
    else errMsg = `Error Code : ${error.statut}\nMessage : ${error.message}`;
    window.alert(errMsg);
    return throwError(() => {
      return errMsg;
    })
  }
}

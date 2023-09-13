import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { User, signIn } from '../interfaces/user';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlBase:string ='https://localhost:44360/';

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  errorHandler(error:HttpErrorResponse){
    console.log(error.error)
    return throwError(error)
  }
  
  getUsers(){
    let url: string = `${this.urlBase}api/User`;
    return this.http.get<ResponseArrayModel<User>>(url, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  SingIn(request:signIn): Observable<ResponseModel<any>>{
    let url : string = `${this.urlBase}api/account`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions).pipe(catchError(this.errorHandler));    
  }
  
  SingUp(request:User): Observable<ResponseModel<any>>{
    let url : string = `${this.urlBase}api/User`;
    return this.http.post<ResponseModel<any>>(url, request, this.httpOptions).pipe(catchError(this.errorHandler));    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestBedService {

  constructor(private http:HttpClient) { }

  getMedicos(){
    return <Observable<any[]>>this.http.get('...')
  }
}

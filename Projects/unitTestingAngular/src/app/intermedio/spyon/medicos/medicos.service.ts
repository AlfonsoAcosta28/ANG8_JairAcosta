import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }

  getMedicos(){
    return this.http.get('...').pipe(
      map((resp :any)=> ['medicoGet'])
    )
  }
  addMedico(medico:any){
    return this.http.post('...', medico).pipe(
      map((resp : any)=> resp['medicoAdd'])
    )
  }
  delMedicos(id:string){
    return this.http.delete('...').pipe(
      map((resp : any)=> resp['medicoDel'])
    )
  }
}

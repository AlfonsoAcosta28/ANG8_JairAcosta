import { Component } from '@angular/core';
import { TestBedService } from './test-bed.service';

@Component({
  selector: 'app-test-bed',
  templateUrl: './test-bed.component.html',
  styleUrls: ['./test-bed.component.css']
})
export class TestBedComponent {

  medicos!: any[]
  constructor(private _medicos:TestBedService){  }


  saludarMedico(nombre:string){
    return `Hola ${nombre}`
  }

  obtenerMedico(){
    this._medicos.getMedicos().subscribe((medicos:any[]) => this.medicos = medicos)
  }
}

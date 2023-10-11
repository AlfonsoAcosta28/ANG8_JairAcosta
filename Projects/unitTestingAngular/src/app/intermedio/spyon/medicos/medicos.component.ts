import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: ''
})
export class MedicosComponent implements OnInit{

  medicos: any[] = []
  mensajeError: any;
  constructor(private _neducisService: MedicosService){
  }
  ngOnInit(): void {
    this._neducisService.getMedicos().subscribe(result => this.medicos = result)
  }

  agregarMedico(){
    let medicoTmp = {
      nombre: 'Alfonso'
    }
    this._neducisService.addMedico(medicoTmp).subscribe((resp : any) => this.medicos.push(resp), (err : any) => this.mensajeError = err)

  }

  borrarMedico(id:string){
    const confirmar = confirm('Estas seguro que desas eliminar este medico?')

    if(confirmar){
      this._neducisService.delMedicos(id).subscribe()
    }


  }
}

import { EMPTY, from, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('Pruebas iniciales con spyOn', () => {
  let component: MedicosComponent;
  const servicio = new MedicosService(null!);

  beforeEach(() => {
    component = new MedicosComponent(servicio);
  });

  it('Debe cargar en OnInit los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of(['medico1', 'medico2', 'medico3']);
    });
    component.ngOnInit();
    expect(component.medicos.length).toBeGreaterThan(0);
  });
  it('Debe asegurarse de llamar al servicio de funcion de agregar medico', () => {
    const espia = spyOn(servicio, 'addMedico').and.callFake(() => {
      return EMPTY;
    });
    component.agregarMedico()
    expect(espia).toHaveBeenCalled()
  });

  it('La funcion agregar medico debe funcionar', () => {
    const medico = {id:100, nombre:'Fulanito'}
    spyOn(servicio, 'addMedico').and.returnValue(from([medico]))
    component.agregarMedico()
    expect(component.medicos.length).toBe(1)
    expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
  });

  it('Si falla agregar medico, la propiedad debe ser igual al error del servicio', () => {
    const error = 'Error al agregar medico'
    spyOn(servicio, 'addMedico').and.returnValue(throwError(()=> error))
    component.agregarMedico()
    expect(component.mensajeError).toBe(error)
  });

  it('Debe llamar al servicio de borrar los medicos', () => {
    spyOn(window, 'confirm').and.returnValue(true)
    const espia = spyOn(servicio,'delMedicos').and.returnValue(of())
    component.borrarMedico('1')
    expect(espia).toHaveBeenCalledWith('1')
  });
  it('No Debe llamar al servicio no se acepte el borrado', () => {
    spyOn(window, 'confirm').and.returnValue(false)
    const espia = spyOn(servicio,'delMedicos').and.returnValue(of())
    component.borrarMedico('1')
    expect(espia).not.toHaveBeenCalledWith('1')
  });
});

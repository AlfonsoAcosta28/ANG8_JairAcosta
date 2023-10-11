import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { RouterComponent } from './router.component';
class fakeRouter{
  navigate(params:any){  }
}

class fakeActivatedRoute{
  private subject = new Subject()

  push(valor:any){
    this.subject.next(valor)
  }

  get params(){
    return this.subject.asObservable()
  }
}

describe('RouterComponent', () => {
  let component: RouterComponent;
  let fixture: ComponentFixture<RouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterComponent],
      providers:[
        {provide: Router, useClass: fakeRouter},
        {provide: ActivatedRoute, useClass: fakeActivatedRoute},
      ]
    });
    fixture = TestBed.createComponent(RouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a medicos cuando se salve un registro', () => {
    const router = TestBed.get(Router)
    const spy = spyOn(router, 'navigate')

    component.save()
    expect(spy).toHaveBeenCalledWith(['medicos','123']);
  });

  it('should colocar al id del componente', () => {
    component = fixture.componentInstance
    const activatedRoute : fakeActivatedRoute = TestBed.get(ActivatedRoute)
    
    activatedRoute.push({id:'131313'})

    expect(component.id).toBe('131313');
  });

});

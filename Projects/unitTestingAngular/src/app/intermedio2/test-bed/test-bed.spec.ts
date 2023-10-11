import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestBedComponent } from './test-bed.component';
import { TestBedService } from './test-bed.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('Componente de medicos', () => {
    let component: TestBedComponent;
    let fixture: ComponentFixture<TestBedComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestBedComponent],
            providers: [TestBedService],
            imports: [HttpClientModule],
        });

        fixture = TestBed.createComponent(TestBedComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crear un componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe retornar el nombre de Jair en el saludo ', () => {
        const nombre = 'Jair';
        const resp = component.saludarMedico(nombre);
        expect(resp).toContain(nombre);
    });
});

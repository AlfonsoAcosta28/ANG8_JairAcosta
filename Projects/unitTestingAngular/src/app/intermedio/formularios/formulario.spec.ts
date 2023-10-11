import { FormRegister } from "./formulario"
import { FormBuilder} from "@angular/forms";

describe('Pruebas de formularios', ()=>{
    let formLogin : FormRegister

    beforeEach(()=> formLogin = new FormRegister(new FormBuilder))

    it('Debe crear un formulario con dos campos, email y password', ()=>{
        expect(formLogin.form.contains('email')).toBeTruthy()
        expect(formLogin.form.contains('password')).toBeTruthy()
    })

    it('El email debe ser requerido', ()=>{
        const control = formLogin.form.get('email')

        control?.setValue('')

        expect(control?.valid).toBeFalsy()
    })

    it('Debe contener un formato valido de email', ()=>{
        const control = formLogin.form.get('email')

        control?.setValue('test@test.com')

        expect(control?.valid).toBeTruthy()
    })
})
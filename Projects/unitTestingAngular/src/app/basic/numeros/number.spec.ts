import { incrementador } from "./number"

describe('Pruebas de numeros', ()=>{
    it('Debe retornar 100 si el numero ingresado es mayor a 100', ()=>{
        const resp = incrementador(100)
        expect(resp).toBe(100)

    })
    it('Debe retornar el numero ingresado mas uno si el numero no es mayor a 100', ()=>{
        const resp = incrementador(50)
        expect(resp).toBe(51)
    })
})
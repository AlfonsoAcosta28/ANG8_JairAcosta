import { loginUser } from "./booleans"

describe('Pruebas de booleanos', ()=>{
    it('Debe retornar un true al hacer login', ()=>{
        const resp = loginUser()
        expect(resp).toBeTrue()
    })
})
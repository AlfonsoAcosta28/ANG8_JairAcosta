import { mensaje } from "./string"

describe('Pruebas string', ()=>{
    it('Debe regresar un string', () =>{
        const mgs = mensaje('Jair')
        expect(typeof mgs).toBe('string')
    })

    it('Debe regresar el nombre Fulanito', () =>{
        const nombre = 'Fulanito'
        const mgs = mensaje(nombre)
        expect(mgs).toContain(nombre)
    })
})
import { player } from "./clases"

describe('Pruebas con clases', ()=>{
    let jugador = new player
    // afterAll(()=>{
    //     console.log('afterAll')
    // })
    // afterEach(()=>{
    //     console.log('afterEach')
    // })
    // beforeAll(()=>{
    //     console.log('beforeAll')
    // })
    beforeEach(()=>{
       jugador.hp = 100
    })
    it('Debe retornar 80 despues de recibir un danio de 20', ()=>{
        const resp = jugador.recibirDanio(20)
        expect(resp).toBe(80)
    })

    it('Debe retornar 50 despues de recibir un danio de 50', ()=>{
        const resp = jugador.recibirDanio(50)
        expect(resp).toBe(50)
    })

    it('Debe retornar 0 despues de recibir un danio mayor a 100', ()=>{
        const resp = jugador.recibirDanio(150)
        expect(resp).toBe(0)
    })
})
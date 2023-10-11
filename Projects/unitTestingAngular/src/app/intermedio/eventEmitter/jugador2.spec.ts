import { Jugador2 } from "./jugador2"

describe('Pruebas EventEmitter', ()=>{
    let jugador : Jugador2

    beforeEach(()=> jugador = new Jugador2())

    it('Debe emitir un evento cuando reciba danio', ()=>{
        let newHp = 0
        jugador.hpCambia.subscribe(hp => newHp = hp)
        jugador.recibirDanio(100000)
        expect(newHp).toBe(0)
    })

    it('Debe emitir un evento cuando reciba danio y sobrevivir si es menos de 100', ()=>{
        let newHp = 0
        jugador.hpCambia.subscribe(hp => newHp = hp)
        jugador.recibirDanio(80)
        expect(newHp).toBe(20)
    })
})
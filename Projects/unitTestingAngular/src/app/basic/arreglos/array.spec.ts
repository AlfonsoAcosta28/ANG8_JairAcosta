import { getHeroes } from "./array"

describe('Pruebas de arreglos', ()=>{
    it('Debe contener por lo menos 3 heroes', ()=>{
        const resp = getHeroes()
        expect(resp.length).toBeGreaterThan(3)
    })
    it('Debe contener por lo menos a spiderMan como heroe', ()=>{
        const resp = getHeroes()
        expect(resp).toContain('SpiderMan')
    })
    it('No debe estar vacio', ()=>{
        const resp = getHeroes()
        expect(!!resp.length).toBeTruthy()
    })
})
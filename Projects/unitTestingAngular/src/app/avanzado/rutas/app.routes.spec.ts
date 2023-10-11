import { RouterlinkComponent } from "../routerlink/routerlink.component"
import { rutas } from "./app.routes"

describe('Rutas principales',()=>{
    it('Debe contener la ruta /home:id', ()=>{
        expect(rutas).toContain(  {path:'home/id', component: RouterlinkComponent})
    })
})
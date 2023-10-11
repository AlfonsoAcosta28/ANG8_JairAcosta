import { Routes } from "@angular/router";
import { RouterComponent } from '../router/router.component'
import { RouterlinkComponent } from "../routerlink/routerlink.component";

export const rutas : Routes =[
    {path:'hme',component:RouterComponent},
    {path:'home/id', component: RouterlinkComponent}
]


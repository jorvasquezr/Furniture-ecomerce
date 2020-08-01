import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VistaGGComponent} from './vista-gg/vista-gg.component'
import {ReportesGeneralesComponent} from './reportes-generales/reportes-generales.component'
import {RangoSalariosComponent} from './rango-salarios/rango-salarios.component'
import {VerEmpleadosComponent} from './ver-empleados/ver-empleados.component'
import {VistaGerenteComponent} from './vista-gerente/vista-gerente.component'
import {VistaLoginComponent} from './vista-login/vista-login.component'
import {VistaRegisterComponent} from './vista-register/vista-register.component'
const routes: Routes = [
  {
    path: 'vista-gg',
    component:  VistaGGComponent
   },

   {
    path: 'reportes-generales',
    component:  ReportesGeneralesComponent
   },
   {
    path: 'rango-salarios',
    component:  RangoSalariosComponent
   },
   {
    path: 'ver-todos',
    component:  VerEmpleadosComponent
   },
   {
     path: 'vista-gerente',
     component: VistaGerenteComponent
   },
   {
    path: 'vista-login',
    component:VistaLoginComponent
   },
   {
    path: 'vista-register',
    component:VistaRegisterComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

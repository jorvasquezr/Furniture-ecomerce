import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VistaGGComponent} from './vista-gg/vista-gg.component'
import {ReportesGeneralesComponent} from './reportes-generales/reportes-generales.component'
import {RangoSalariosComponent} from './rango-salarios/rango-salarios.component'
import {VerEmpleadosComponent} from './ver-empleados/ver-empleados.component'
import {VistaGerenteComponent} from './vista-gerente/vista-gerente.component'
import {VistaLoginComponent} from './vista-login/vista-login.component'
import {VistaClienteComponent} from './vista-cliente/vista-cliente.component'
import {VistaRegisterComponent} from './vista-register/vista-register.component'
import {VistaEmpleadoComponent } from './vista-empleado/vista-empleado.component';
import {AgregarInventarioComponent} from './agregar-inventario/agregar-inventario.component';
import { PedidoComponent } from './pedido/pedido.component';
import { InicioComponent } from './inicio/inicio.component';
import { VistaCambiarEstadoComponent } from './vista-cambiar-estado/vista-cambiar-estado.component';
import { ConfiguracionesAccesibilidadComponent } from './configuraciones-accesibilidad/configuraciones-accesibilidad.component';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: 'vista-gg',
    component:  VistaGGComponent
   },
   {
  path: '',
   component:  InicioComponent
  },

   {
    path: 'reportes-generales',
    component:  ReportesGeneralesComponent
   },
   {
    path: 'cliente/:param',
    component:  VistaClienteComponent
   },
   {
    path: 'pedido',
    component:  PedidoComponent
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
   },
   {
    path: 'vista-empleado',
    component: VistaEmpleadoComponent
   },
   {
     path: 'configuraciones-accesibilidad',
     component: ConfiguracionesAccesibilidadComponent
   },
   {
     path: 'agregar-inventario',
     component: AgregarInventarioComponent
   },
   {
    path: 'cambiar-estado-pedido',
    component: VistaCambiarEstadoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

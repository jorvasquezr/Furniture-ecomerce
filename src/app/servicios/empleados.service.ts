import { Injectable } from '@angular/core';
import {Empleado} from '../models/empleado.model'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleado[] = [{
    nombre: 'Mario',
    puesto: 'Cajero',
    salario: 10,
    sucursal: 'San Jose'
  },
  {
    nombre: 'Astolfo',
    puesto: 'Gerente',
    salario: 10,
    sucursal: 'San Jose'
  },
  {
    nombre: 'Lucia',
    puesto: 'Vendedor',
    salario: 10,
    sucursal: 'San Jose'
  },
  {
    nombre: 'Maria',
    puesto: 'Vendedor',
    salario: 18,
    sucursal: 'San Jose'
  },
  {
    nombre: 'Astolfo',
    puesto: 'Gerente',
    salario: 10,
    sucursal: 'San Jose'
  },
  {
    nombre: 'Luz',
    puesto: 'Cajero',
    salario: 12,
    sucursal: 'San Jose'
  }];
  constructor(){
    if (localStorage.getItem("listaEmpleados") === null){
      console.log("hola")
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("listaEmpleados")) as Empleado[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
      this.empleados = filtered;
      console.log(this.empleados);
    }
  }
  hacerCambios(){
    localStorage.setItem("listaEmpleados", JSON.stringify(this.empleados));
  }
  tablaCambiada(nuevaPromo?: Empleado): Observable<Empleado[]>{
    const nuevaLista = this.empleados;
    if (nuevaPromo) {
      nuevaLista.push(nuevaPromo);
      this.hacerCambios();
    }
    return of(nuevaLista);
  }
}

import { Injectable } from '@angular/core';
import {sucursal} from "../models/sucursal.model"

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  public sucursales : sucursal[] = [
    {
      nombre: "Central",
      ubicacion: "Cartago",
      empleados : 50,
      ganancias: 1000,
      talleres : [ { nombre : "Cartago"} , { nombre : "Tres rios"} ]
    },
    {
      nombre: "San jose",
      ubicacion: "San pedro",
      empleados: 60,
      ganancias: 1000,
      talleres : [ { nombre : "Curridabat"} , { nombre : "Sabanilla"} ]
    },
    {
      nombre: "San Carlos",
      ubicacion: "San Carlos",
      empleados: 50,
      ganancias: 900,
      talleres : [ { nombre : "La Fortuna"} , { nombre : "Alajuela"} ]
    }
  ]

  agregarSucursal(nombre, ubicacion, empleados, ganancias){
    const nuevo = 
    {
      nombre : nombre,
      ubicacion : ubicacion,
      empleados : empleados,
      ganancias : ganancias,
      talleres : []
    }

    const i = this.sucursales.findIndex(user=>
      user.nombre === nombre
    )
    delete this.sucursales[i];
    this.sucursales.push(nuevo);

    localStorage.setItem("ListaSucursales", JSON.stringify(this.sucursales));
  }

  agregarTaller(nombre, ubicacion, empleados, ganancias, talleres, nuevoTaller){
    talleres.push( { nombre :  nuevoTaller})

    const nuevo = 
    {
      nombre : nombre,
      ubicacion : ubicacion,
      empleados : empleados,
      ganancias : ganancias,
      talleres : talleres
    }

    const i = this.sucursales.findIndex(user=>
      user.nombre === nombre
    )
    delete this.sucursales[i];
    this.sucursales.push(nuevo);

    localStorage.setItem("ListaSucursales", JSON.stringify(this.sucursales));
  }


  constructor() {
    
    if (localStorage.getItem("ListaSucursales") === null) {
      console.log("hola")
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("ListaSucursales")) as sucursal[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
      this.sucursales = filtered;
      console.log(this.sucursales);
    }
   }
}

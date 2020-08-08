import { Injectable } from '@angular/core';
import {puesto} from "../models/puestos.model";

@Injectable({
  providedIn: 'root'
})

export class RangoSalariosService {

  public listPuestos: puesto[] = [
    {
      nombre : "Gerente",
      salarioMin : 50,
      salarioMax : 150
    },
    {
      nombre : "Vendedor",
      salarioMin : 10,
      salarioMax : 50
    },
    {
      nombre : "Cajero",
      salarioMin : 10,
      salarioMax : 60
    },
    {
      nombre : "Artesano",
      salarioMin : 10,
      salarioMax : 60
    }
  ]

  constructor( ) {
    if (localStorage.getItem("listaEncuestion") === null) {
      console.log("hola")
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("listaEncuestion")) as puesto[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
      this.listPuestos = filtered;
      console.log(this.listPuestos);
    }
  }

  hacerCambios(puesto, salariomin, salariomax){
    const nuevo =
    {
      nombre : puesto,
      salarioMin : salariomin,
      salarioMax : salariomax
    }

    const i = this.listPuestos.findIndex(user=>
      user.nombre === puesto
    )
    delete this.listPuestos[i];
    this.listPuestos.push(nuevo);

    localStorage.setItem("listaEncuestion", JSON.stringify(this.listPuestos));
  }

  agregarPuesto(puesto, salariomin, salariomax){
    const nuevo =
    {
      nombre : puesto,
      salarioMin : salariomin,
      salarioMax : salariomax
    }
    this.listPuestos.push(nuevo);

    localStorage.setItem("listaEncuestion", JSON.stringify(this.listPuestos));
  }
}

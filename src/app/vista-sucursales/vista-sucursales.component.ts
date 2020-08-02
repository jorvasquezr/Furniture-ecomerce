import { Component, OnInit } from '@angular/core';

export interface taller {
  nombre : string 
}

export interface sucursal {
  nombre: string;
  ubicacion: string;
  empleados: number;
  ganancias: number;
  talleres : taller[];
}

@Component({
  selector: 'app-vista-sucursales',
  templateUrl: './vista-sucursales.component.html',
  styleUrls: ['./vista-sucursales.component.scss']
})
export class VistaSucursalesComponent implements OnInit {

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
    }
  ]

  agregarSucursal(){
    location.reload()
  }

  constructor() { }

  ngOnInit(): void {
  }

}

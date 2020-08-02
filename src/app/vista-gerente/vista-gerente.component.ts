import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material';


export interface Produto{
  nombre: string;
  precio: number;
}

export interface trabajador {
  nombre: string;
  puesto: string;
  salario: string;
  sucursal: string;
}

const empleados : trabajador[] = [

  {
    nombre: "Pedro",
    puesto: "Gerente",
    salario: "100",
    sucursal: "Cartago"
  },
  {
    nombre: "Maria",
    puesto: "Vendedor",
    salario: "10",
    sucursal: "Cartago"
  },
  {
    nombre: "Saul",
    puesto: "Cajero",
    salario: "20",
    sucursal: "Cartago"
  },
  {
    nombre: "Mario",
    puesto: "Cajero",
    salario: "10",
    sucursal: "San Jose"
  },
  {
    nombre: "Astolfo",
    puesto: "Gerente",
    salario: "10",
    sucursal: "San Jose"
  },
  {
    nombre: "Lucia",
    puesto: "Vendedor",
    salario: "10",
    sucursal: "San Jose"
  },
  {
    nombre: "Maria",
    puesto: "Vendedor",
    salario: "18",
    sucursal: "San Jose"
  },
  {
    nombre: "Astolfo",
    puesto: "Gerente",
    salario: "10",
    sucursal: "San Jose"
  },
  {
    nombre: "Luz",
    puesto: "Cajero",
    salario: "12",
    sucursal: "San Jose"
  },
  {
    nombre: "Manuela",
    puesto: "Gerente",
    salario: "75",
    sucursal: "San Carlos"
  },
  {
    nombre: "Estefania",
    puesto: "Vendedor",
    salario: "15",
    sucursal: "San Carlos"
  },

]

const datosTabla: Produto[] = [
  {nombre: 'Silla', precio: 5.99},
  {nombre: 'Sillon', precio: 5.99},
  {nombre: 'Repisa', precio: 5.99},
  {nombre: 'Mueble de baño', precio: 5.99},
  {nombre: 'Mesa', precio: 5.99},
  {nombre: 'Escritorio', precio: 5.99},
  {nombre: 'Biblioteca', precio: 5.99},
]

@Component({
  selector: 'app-vista-gerente',
  templateUrl: './vista-gerente.component.html',
  styleUrls: ['./vista-gerente.component.scss']
})

export class VistaGerenteComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'precio'];
  displayedColumns2: string[] = ['nombre', 'puesto', 'salario', 'sucursal'];
  dataSource = datosTabla;
  dataSource2 = empleados;
  constructor() { }

  ngOnInit(): void {
  }

}



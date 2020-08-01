import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface trabajador {
  nombre: string;
  puesto: string;
  salario: string;
  sucursal: string;
}

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.scss']
})
export class VerEmpleadosComponent implements OnInit {

  private empleados : trabajador[] = [

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


  displayedColumns: string[] = ['nombre', 'puesto', 'salario', 'sucursal'];
  dataSource = new MatTableDataSource(this.empleados);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}

import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material';


export interface Produto{
  nombre: string;
  precio: number;
}



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
  dataSource = datosTabla;
  constructor() { }

  ngOnInit(): void {
  }

}



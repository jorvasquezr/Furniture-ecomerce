import { Injectable } from '@angular/core';
import {Producto} from '../models/producto.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  datos: Producto[] = [
    {nombre: 'Silla', precio: 6, id: 0, descripcion:""},
    {nombre: 'Sillon', precio: 6, id: 1, descripcion:""},
    {nombre: 'Repisa', precio: 6, id: 2, descripcion:""},
    {nombre: 'Mueble de baño', precio: 6, id: 3, descripcion:""},
    {nombre: 'Mesa', precio: 6, id: 4, descripcion:""},
    {nombre: 'Escritorio', precio: 6, id: 5, descripcion:""},
    {nombre: 'Biblioteca', precio: 6, id: 6, descripcion:""},
  ];
  constructor() {
    if (localStorage.getItem("listaProductos") === null) {
      console.log("hola")
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("listaProductos")) as Producto[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
      this.datos = filtered;
      console.log(this.datos);
    }
  }
  tablaCambiada(nuevoProducto?: Producto): Observable<Producto[]>{
    const nuevaLista = this.datos;
    if (nuevoProducto) {
      nuevaLista.push(nuevoProducto);
      this.hacerCambios();
    }
    return of(nuevaLista);
  }
  hacerCambios(){
    localStorage.setItem("listaProductos", JSON.stringify(this.datos));
  }
  getLastID(){
    return this.datos[this.datos.length - 1].id;
  }
}

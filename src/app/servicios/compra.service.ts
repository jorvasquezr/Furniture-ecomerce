import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Carrito } from '../models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public carrito : Carrito[] = []

  public productosDisponibles: number[] = [1,2,2]

  public productosOfrecidos: Producto[] = [ //aquellos que vende la empresa
    {
      precio: 40,
      id:1,
      nombre:"Silla",
      descripcion:"Madera de alta calidad 40cm de alto"
    },{
      precio: 80,
      id:2,
      nombre:"Escritorio",
      descripcion:"Estilo moderno 72 cm (altura) x (150 cm Ancho)  x 60 (cm Profundidad)"
    },{
      precio: 400,
      id:3,
      nombre:"Juego de sala",
      descripcion:"Contiene una mesa grande para 8 personas con sus respectivas sillas, estilo rustico"
    }
  ]

  constructor() {
    if (localStorage.getItem("productosOfrecidos") === null) {
      localStorage.setItem('productosOfrecidos',JSON.stringify(this.productosOfrecidos));
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("productosOfrecidos")) as Producto[];
      var filtered = filtered.filter(function (el) {return el != null;});
      this.productosOfrecidos= filtered;
    }


    if (localStorage.getItem("productosDisponibles") == null) {
      localStorage.setItem('productosDisponibles',JSON.stringify(this.productosDisponibles));
    }
    else{
      var filtereDosponibleItem = JSON.parse(localStorage.getItem("productosDisponibles")) as number[];
      var filtereDosponibleItem = filtereDosponibleItem.filter(function (el) {return el != null;});
      this.productosDisponibles = filtereDosponibleItem;
    } 
  }

  agregarProducto(producto:Producto,cantidad:number){
    for (let i = 0; i < this.carrito.length; i++) {
      if(this.carrito[i].producto.id == producto.id)
      this.carrito.splice(i, 1);
    }
    this.carrito.push({producto,cantidad});
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }

  removerProductoCarrito(producto:Producto){
    for (let i = 0; i < this.carrito.length; i++) {
      if(this.carrito[i].producto.id == producto.id)
      this.carrito.splice(i, 1);
    }
    localStorage.setItem('carrito',JSON.stringify(this.carrito));
  }
  getProduct(idProducto) {
    console.log(this.productosOfrecidos);
    console.log(idProducto);
    for (let i = 0; i < this.productosOfrecidos.length; i++) {
      if(this.productosOfrecidos[i].id == idProducto)
        return this.productosOfrecidos[i];
    }
  }
}

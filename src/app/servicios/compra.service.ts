import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Pedido } from '../models/pedido.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public pedidos : Pedido[];

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

  agregarProducto(correoUsuario:string,producto:Producto,cantidad:number){
    for (let i = 0; i < this.pedidos.length; i++) {
      if(this.pedidos[i].correoCliente == correoUsuario)
        for (let i = 0; i < this.pedidos[i].carrito.length; i++) {
          if(this.pedidos[i].carrito[i].producto.id == producto.id)
            this.pedidos[i].carrito.splice(i, 1);
        }
        this.pedidos[i].carrito.push({producto,cantidad});
    }
    localStorage.setItem('carrito',JSON.stringify(this.pedidos));
  }

  removerProductoCarrito(idProducto:number,correoUsuario:string){
    for (let i = 0; i < this.pedidos.length; i++) {
      if(this.pedidos[i].correoCliente == correoUsuario)
        for (let i = 0; i < this.pedidos[i].carrito.length; i++) {
          if(this.pedidos[i].carrito[i].producto.id == idProducto)
            this.pedidos[i].carrito.splice(i, 1);
        }
    }
    localStorage.setItem('pedidos',JSON.stringify(this.pedidos));
  }
  
  getMicarrito(correoUsuario: String){
    for (let i = 0; i < this.productosOfrecidos.length; i++) {
      if(this.pedidos[i].correoCliente == correoUsuario)
        return this.pedidos[i];
    }
  }
}

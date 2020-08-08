import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Pedido } from '../models/pedido.model';
import { User } from '../models/user.model';
import { Carrito,CarritoRole } from '../models/carrito.model'
import { concatMapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public pedidos : Pedido[]=[];

  public carrito: Pedido={
    correoCliente:"",
    carrito:[]
  };

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

    if (localStorage.getItem("productos") != null) {
      var filtereProducto = JSON.parse(localStorage.getItem("productos")) as Pedido[];
      var filtereProducto = filtereProducto.filter(function (el) {return el != null;});
      this.pedidos = filtereProducto;
    }
  }

  agregarProducto(producto:Producto,cantidad:number,rol:CarritoRole){
    //agrega un producto al carrito
        for (let i = 0; i < this.carrito.carrito.length; i++) {
          if(this.carrito.carrito[i].producto.id == producto.id)
            this.pedidos[i].carrito.splice(i, 1);
        }
        const nuevo: Carrito = {
          producto: producto,
          cantidad: cantidad,
          tipo:CarritoRole.PRODUCTO
        };

        console.log(nuevo);
        //this.carrito.carrito.push(nuevo);
  }

  removerProductoCarrito(idProducto:number){
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      if(this.carrito.carrito[i].producto.id == idProducto)
        this.pedidos[i].carrito.splice(i, 1);
    }
  }
  
  getPedidos(correoUsuario: String){
    return this.pedidos.filter(el => el.correoCliente==correoUsuario);
  }
}

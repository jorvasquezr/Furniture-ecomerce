import { Injectable } from '@angular/core';
import {Producto} from '../models/producto.model';
import { Observable, of } from 'rxjs';
import {ProductoDisponible} from '../models/productoDisponible'
import {Carrito} from '../models/carrito.model'




@Injectable({
  providedIn: 'root'
})
export class ProductoService {




  public productosDisponibles: ProductoDisponible[] = [
    {
      idProducto:1,
      cantidad:10
    },
    {
      idProducto:2,
      cantidad:10
    }
  ]

  public recargaProducto: ProductoDisponible[] = [
    {
      idProducto:1,
      cantidad:10
    },
    {
      idProducto:2,
      cantidad:10
    }
  ]

  public productosOfrecidos: Producto[] = [ //aquellos que vende la empresa
    {
      precio: 40,
      id:1,
      nombre:"Silla",
      descripcion:"Madera de alta calidad 40cm de alto",
      imagenUrl: "https://pycca.vteximg.com.br/arquivos/ids/184088-600-600/Silla-N00149.png?v=637136029388500000"
    },{
      precio: 80,
      id:2,
      nombre:"Escritorio",
      descripcion:"Estilo moderno 72 cm (altura) x (150 cm Ancho)  x 60 (cm Profundidad)",
      imagenUrl: "https://media.nidux.net/pull/2000/2000/3190/124235_product_5a79e8587f51e.jpg"
    },{
      precio: 400,
      id:3,
      nombre:"Juego de sala",
      descripcion:"Contiene una mesa grande para 8 personas con sus respectivas sillas, estilo rustico",
      imagenUrl:"https://gollo-prod-grupounicomer.netdna-ssl.com/media/catalog/product/cache/b0a55a6bc5da505f12fc291d1ff66806/4/0/4001010701_juego_sala_mucaru_star_4__1.jpg"
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
      var filtereDosponibleItem = JSON.parse(localStorage.getItem("productosDisponibles")) as ProductoDisponible[] ;
      var filtereDosponibleItem = filtereDosponibleItem.filter(function (el) {return el != null;});
      this.productosDisponibles = filtereDosponibleItem;
    }
  }
  public getProducto(idProducto: number): Producto {
    return this.productosOfrecidos.find(element => element.id==idProducto);

  }


  tablaCambiada(nuevoProducto?: Producto): Observable<Producto[]>{
    const nuevaLista = this.productosOfrecidos;
    if (nuevoProducto) {
      nuevaLista.push(nuevoProducto);
      this.hacerCambios();
    }
    return of(nuevaLista);
  }
  hacerCambios(){
    localStorage.setItem("productosOfrecidos", JSON.stringify(this.productosOfrecidos));
  }
  getLastID(){
    return this.productosOfrecidos[this.productosOfrecidos.length - 1].id;
  }
}

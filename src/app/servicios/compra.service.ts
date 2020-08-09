import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Pedido } from '../models/pedido.model';
import { User } from '../models/user.model';
import { Envio } from '../models/envio.model';
import { Pago } from '../models/pago.model';
import { Carrito } from '../models/carrito.model';

import { concatMapTo, elementAt } from 'rxjs/operators';
import {ProductoService} from './producto.service'
import {PromoService} from './promo.service'
import {ProductoDisponible} from '../models/productoDisponible'
import {LoginService} from './login.service'
import {UserRole} from '../models/user.model'
import {Subject, Observable} from 'rxjs'
import {formatDate} from '@angular/common'



@Injectable({
  providedIn: 'root'
})
export class CompraService {

  public pedidos : Pedido[]=[];

  public carrito: Pedido;

  private carrito$ = new Subject<Pedido>()

  constructor(private promoService:PromoService,private loginService:LoginService, private productoService:ProductoService){
    if (localStorage.getItem("pedidos") != null) {
      var filtereProducto = JSON.parse(localStorage.getItem("pedidos")) as Pedido[];
      var filtereProducto = filtereProducto.filter(function (el) {return el != null;});
      this.pedidos = filtereProducto;
      this.limpiarCarrito();
     
    }
  }
  limpiarCarrito(){
    if(this.loginService.usuarioActual.tipo==UserRole.CLIENTE){
      this.nuevoCarritoCliente(this.loginService.usuarioActual.email)
    }else{
      if(this.loginService.usuarioActual.tipo==UserRole.EMPLEADO){
        this.nuevoCarritoEmpleado(this.loginService.usuarioActual.email)
      }

    }
    this.carrito$.next(this.carrito);
  }

  public calificarPedido(id:number, calEntrega:number, calProducto:number){
    try{
      var pedido = this.pedidos.find(element => element.id = id);
      pedido.calEntrega=calEntrega;
      pedido.calProducto=calProducto;
      pedido.calificado=true;
      console.log("servicios/compra.service.ts")
      console.log(this.pedidos.find(element => element.id = id))
    }
    catch(error){
      console.error(error)
    }
  }
  public agregarEnvio(envio:Envio){
    this.carrito.envio=envio;
  }
  public agregarPago(pago:Pago){
    this.carrito.pago=pago;
  }
  public nuevoCarritoCliente(usrEmail:string){
    this.carrito={ 
      correoCliente:usrEmail,
      id:this.pedidos.length,
      calEntrega:0,
      calProducto:0,
      calificado:false,
      carrito:[]
    }
  }
  public nuevoCarritoEmpleado(empEmail:string){
    this.carrito={ 
      correoCliente:"",
      id:this.pedidos.length,
      calEntrega:0,
      calProducto:0,
      calificado:false,
      carrito:[],
      correoEmpleado: empEmail
    }
  }

  public agregarCorreoCliente(clienteEmail:string){
    if(this.carrito.correoEmpleado!==null){
      this.carrito.correoCliente=clienteEmail;
    }
    this.carrito$.next(this.carrito);
  }
  getCarrito$(): Observable<Pedido>{
    return this.carrito$.asObservable();
  }



  
  public registrarPedido():boolean{
    this.carrito.fecha= formatDate(new Date(), 'dd/MM/yyyy hh:mm', 'en');
    const arr = JSON.parse(localStorage.getItem('pedidos')) || [];
    arr.push(this.carrito);
    this.pedidos.push(this.carrito)
    console.log(this.pedidos)
    localStorage.setItem('pedidos',JSON.stringify(arr));
    this.limpiarCarrito();
    return true;
  }
  agregarProductoCantidad(idProducto:number,pcantidad:string){
   let cantidad = Number(pcantidad) || 1;
   if(cantidad<1){
     cantidad=1;
   }
    if(Number(cantidad)!==null)
    var producto = this.carrito.carrito.find(element=> element.idProducto==idProducto);
    producto.cantidad=cantidad;

  }
  public productoEnCarrito(idProducto):boolean{
    if(this.carrito!== undefined){
      var p = this.carrito.carrito.find(elemen => elemen.idProducto===idProducto);
      if( p === undefined){
       
        return false;
      }
      return true;
    }
    return false;

  }
  public obtenerCantidadDeProducto():number{
    var total:number = 0
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      total += this.carrito.carrito[i].cantidad;
      }
    console.log(total)
    return total
  }

  public agregarProducto(idProducto:number,cantidad:number){
    if(this.carrito===undefined){
      this.limpiarCarrito();
    }
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      if(this.carrito.carrito[i].idProducto == idProducto)
        this.carrito.carrito.splice(i, 1);
      }
    var precio = this.productoService.getProducto(idProducto).precio;

    var descuento = precio - this.obtenerPrecioDescuento(idProducto);
    var carrito: Carrito ={
      idProducto:idProducto,
      cantidad:cantidad,
      descuento:descuento,
      precioProducto:precio
    }
    this.carrito.carrito.push(carrito);
    this.carrito$.next(this.carrito);
  }

  public removerProductoCarrito(idProducto:number){
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      if(this.carrito.carrito[i].idProducto == idProducto)
        this.carrito.carrito.splice(i, 1);
    }
    this.carrito$.next(this.carrito);
  }

  public getTotal(){
    var total=0;
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      const producto = this.getProducto(this.carrito.carrito[i].idProducto);
      total+=producto.precio*this.carrito.carrito[i].cantidad;
    }
    return total;
    
  }
  public getDescuento(){
    var total=0;
    for (let i = 0; i < this.carrito.carrito.length; i++) {
      total+=this.obtenerPrecioDescuento(this.carrito.carrito[i].idProducto);
    }
    return total;
  }

  private obtenerPrecioDescuento(id){
    for (let i = 0; i < this.promoService.datos.length; i++) {
      if(this.promoService.datos[i].idProducto==id && new Date() <= this.promoService.datos[i].fechaFinal)
        return this.promoService.datos[i].nuevoPrecio
    }
    return 0;
  }
  public productoDisponible(id:number){
    try{

    }
    catch(error){
      console.log(error);

    }

  }
  
  
  public getPedidos(correoUsuario: String){
    return this.pedidos.filter(el => el.correoCliente==correoUsuario);
  }
  public getMicarrito():Pedido{
    if(this.carrito===undefined){
      this.limpiarCarrito();
    }
    return this.carrito;
  }
  public getProducto(idProducto: number): Producto {
    return this.productoService.getProducto(idProducto);
  }
  get productosOfrecidos():Producto[]{
    return this.productoService.productosOfrecidos;
  }
  get productosDisponibles():ProductoDisponible[]{
    return this.productoService.productosDisponibles;
  }
  set productosOfrecidos(po){
    this.productoService.productosOfrecidos=po;
  }
  set productosDisponibles(pe){
    this.productoService.productosDisponibles=pe;
  }



}

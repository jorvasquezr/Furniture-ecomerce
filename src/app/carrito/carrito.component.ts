import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CompraService } from '../servicios/compra.service';
import { LoginService } from '../servicios/login.service';
import { Pedido } from '../models/pedido.model';
import { Producto } from '../models/producto.model';
import { PromoService } from '../servicios/promo.service';
import { ProductoService } from '../servicios/producto.service';
import {Router} from '@angular/router'



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public pedido:Pedido;

    public total:number;
    public descuento:number;
    public totalNeto:number;
    public cantidadProductos:number;
    public productos: Producto[]=[];
    public carrito:Observable<Pedido> ;
  
  constructor(private productoSev:ProductoService,private router:Router,private auth : LoginService, public compraService : CompraService, private breakpointObserver: BreakpointObserver) {
    if(this.auth.usuarioActual!=null){

        this.pedido = this.compraService.getMicarrito();
        this.total = this.getTotal();
        this.descuento = this.getDescuento();
        this.cantidadProductos = this.pedido.carrito.length;
        this.totalNeto=this.total-this.descuento
      }
     
    
  }
  obtenerProducto(id:number):Producto{
    return this.productoSev.getProducto(id);
  }



  getTotal():number{
    return this.compraService.getTotal();
  }
  getDescuento():number{
    return this.compraService.getDescuento();
  }


  goToPedido(){
    this.router.navigate(['/pedido']);
  }
 

  ngOnInit(): void {
    

  }

}

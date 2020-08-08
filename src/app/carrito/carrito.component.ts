import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CompraService } from '../servicios/compra.service';
import { LoginService } from '../servicios/login.service';
import { Pedido } from '../models/pedido.model';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent  {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
/*
    public pedido:Pedido={
      carrito:[],
      correoCliente:""
    };
*/
    public productos:Producto[]=[];

    public total:number;
    public descuento:number;
    public totalNeto:number;
    public cantidadProductos:number;

  constructor(private auth : LoginService,private compraService : CompraService, private breakpointObserver: BreakpointObserver) {
    if(this.auth.usuarioActual!=null){
      //this.promociones=this.compraService.promociones;

      //get products to show them, falta validar que no tenga promociones, si tiene promocion se muestra disitnto
      for (let i = 0; i < this.compraService.carrito.carrito.length; i++) {
          this.productos.push(
            this.compraService.getProducto(this.compraService.carrito.carrito[i].idProducto)
          );
      }

      this.total = this.getTotal();
      this.cantidadProductos = this.productos.length;
      //this.totalNeto=this.total-this.descuento
    }
    
  }
  private getTotal(){
    var total=0;
    for (let i = 0; i < this.productos.length; i++) {
      total+=this.productos[i].precio;
    }
    return total;
    
  }
  private getDescuento(){
      
  }
  

  ngOnInit(): void {

  }

}

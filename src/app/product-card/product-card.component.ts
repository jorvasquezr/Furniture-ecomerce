import { Component, Input,OnInit } from '@angular/core';
import { CompraService } from '../servicios/compra.service';
import { Producto } from '../models/producto.model';
import { LoginService } from '../servicios/login.service';
import { PromoService } from '../servicios/promo.service';
import {MatSnackBar} from'@angular/material'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() public tipo: string="tienda";
  @Input() public producto: Producto;


  public promocion:string;

  constructor(private _snackBar:MatSnackBar,private promoService:PromoService,private auth:LoginService,public compraService : CompraService) {  }
  comprar(){

  
    if(this.auth.usuarioActual!=null){
      this.compraService.agregarProducto(this.producto.id,1);

    } else {

      this.openSnackBar("Necesitas iniciar sesión para poder comprar","ok");
    }
  }
  openSnackBar(msg:string, action:string) {
    this._snackBar.open(msg, action, {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
  cantidadCambio(value){
    this.compraService.agregarProductoCantidad(this.producto.id,value)
  }
  remover(){
    console.log("sads")
  
    this.compraService.removerProductoCarrito(this.producto.id);
    console.log(this.compraService.carrito)
  }

  private obtenerPrecioDescuento(id){
    for (let i = 0; i < this.promoService.datos.length; i++) {
      console.log(this.promoService.datos[i].fechaFinal);
      console.log(new Date());
      if(this.promoService.datos[i].idProducto==id && formatDate(new Date(),'yyyy-MM-dd','en_US') <= formatDate(this.promoService.datos[i].fechaFinal,'yyyy-MM-dd','en_US'))
        return "OFERTA: ahora por USD $" + this.promoService.datos[i].nuevoPrecio;
    }
    return "";
  }
  ngOnInit() {
    if(this.producto!=null)
      this.promocion=this.obtenerPrecioDescuento(this.producto.id);
  }
}
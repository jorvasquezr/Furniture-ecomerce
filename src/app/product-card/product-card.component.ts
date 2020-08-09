import { Component, Input,OnInit } from '@angular/core';
import { CompraService } from '../servicios/compra.service';
import { Producto } from '../models/producto.model';
import { LoginService } from '../servicios/login.service';
import { PromoService } from '../servicios/promo.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() public tipo: string="tienda";
  @Input() public producto: Producto;

  public promocion:string;

  constructor(private promoService:PromoService,private auth:LoginService,private compraService : CompraService) {  }
  comprar(){
    if(this.auth.usuarioActual!=null){
      this.compraService.agregarProducto(this.producto.id,1);

    } else {
      console.log("Necesitas iniciar sesión para poder comprar");
    }
  }

  private obtenerPrecioDescuento(id){
    for (let i = 0; i < this.promoService.datos.length; i++) {
      if(this.promoService.datos[i].idProducto==id && new Date() <= this.promoService.datos[i].fechaFinal)
        return "OFERTA: ahora por USD $" + this.promoService.datos[i].nuevoPrecio;
    }
    return "";
  }
  ngOnInit() {
    if(this.producto!=null)
      this.promocion=this.obtenerPrecioDescuento(this.producto.id);
  }
}
import { Component, Input } from '@angular/core';
import { CompraService } from '../servicios/compra.service';
import { Producto } from '../models/producto.model';
import { LoginService } from '../servicios/login.service';
import { CarritoRole } from '../models/carrito.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent {
  @Input() public tipo: string="tienda";
  @Input() public producto: Producto;

  constructor(private auth:LoginService,private compraService : CompraService) {
  }
  comprar(){
    if(this.auth.usuarioActual!=null){
      this.compraService.agregarProducto(this.producto,1,CarritoRole.PRODUCTO);
    } else {
      console.log("Necesitas iniciar sesión para poder comprar");
    }
  }
}

import { Component, Input } from '@angular/core';
import { CompraService } from '../servicios/compra.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() public tipo: string="tienda";
  @Input() public producto: Producto;

  constructor(private compraService : CompraService) {
  }
  comprar(){
    this.compraService.agregarProducto(this.producto,1);
  }
}

import { Component, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { DialogoEvaluacionComponent } from '../dialogo-evaluacion/dialogo-evaluacion.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogData} from '../dialogo-evaluacion/dialog-data'
import {CompraService} from '../servicios/compra.service'
import { Location } from '@angular/common';
import {ProductoService} from '../servicios/producto.service'

import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import { Pedido } from '../models/pedido.model';
import { Estado } from '../models/envio.model';
import { Carrito } from '../models/carrito.model';
import {EstadoPago} from '../models/pago.model';
@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss']
})
export class PedidoCardComponent {
    @Input() public pedido: Pedido;

    //pedid
    pedidoCalificado=false;
    /*
    entrega=0;
    producto= 0;
    pedidoId="3454";
    pedidoCalificado=false;
    pedidoEntregado=false;;
*/
  constructor(private productoServ:ProductoService,private location:Location,public dialog: MatDialog, private _snackBar: MatSnackBar) {
   }
   estadoEnvio(id:number){
     console.log(id)
    switch(id) { 
      case Estado.ALMACENADO: { 
        return "Almacenado"
      } 
      case Estado.ENTREGADO : { 
        return "Entregado"
      } 
      case Estado.ENVIADO: { 
        return "Enviado"

     } 
     case Estado.FABRICACION : { 
       return "Fabricacion"
   } 
      default: { 
        return "Indefinido"
      } 
   } 
   }
   estadoPago(id:number){
    switch(id) { 
      case EstadoPago.CANCELADO: { 
        return "Cancelado"
      } 
      case EstadoPago.PENDIENTE : { 
        return "Pedinente"
      } 
      default: { 
        return "Indefinido"
      } 
   } 
   }
  openDialog(): void {
    
    if(this.pedido.envio.estado=Estado.ENTREGADO){
      const dialogRef = this.dialog.open(DialogoEvaluacionComponent, {
        data: {pedidoId:this.pedido.id,entrega: this.pedido.calEntrega, producto: this.pedido.calEntrega}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.pedido.calProducto = result.producto;
        this.pedido.calEntrega = result.entrega;
        this.pedido.calificado=true;
      });
    }else{
    this.openSnackBar()
    }
  }
  cancel(){
    this.location.back(); 
  }
  getProductName(idNumb:number ):string{

    return this.productoServ.getProducto(idNumb).nombre
  }
  getTotal(productId:Number){
    var producto =this.pedido.carrito.find(element=> element.idProducto==productId)
    return ((producto.precioProducto-producto.descuento)*producto.cantidad )
  }


  abrirPanel(panel:MatExpansionPanel){
    panel.expanded=!panel.expanded;
  }
  openSnackBar() {
    this._snackBar.open('Pedido aun no entregado', 'Close', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['style-error']
    });
  }


  displayedColumns: string[] = ['producto', 'precio','descuento','cantidad','costoTotal'];


  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.pedido.carrito.map(t => t.precioProducto).reduce((acc, value) => acc + value, 0);
  }
  getTotalDiscont() {
    return this.pedido.carrito.map(t => t.descuento).reduce((acc, value) => acc + value, 0);
  }
  getTotalQuantity() {
    return this.pedido.carrito.map(t => t.cantidad).reduce((acc, value) => acc + value, 0);
  }
  getTotalToral() {
    return this.pedido.pago.totalPagado;
  }

}

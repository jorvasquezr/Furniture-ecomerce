import { Component, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { DialogoEvaluacionComponent } from '../dialogo-evaluacion/dialogo-evaluacion.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogData} from '../dialogo-evaluacion/dialog-data'

import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import { Pedido,Estado } from '../models/pedido.model';
import { Carrito } from '../models/carrito.model';
@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss']
})
export class PedidoCardComponent {
    @Input() public pedido: Pedido;
    /*
    entrega=0;
    producto= 0;
    pedidoId="3454";
    pedidoCalificado=false;
    pedidoEntregado=false;;
*/
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {
    
   }
  openDialog(): void {
    
    if(this.pedido.estado=Estado.ENTREGADO){

     
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

}

import { Component, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material';
import { DialogoEvaluacionComponent } from '../dialogo-evaluacion/dialogo-evaluacion.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogData} from '../dialogo-evaluacion/dialog-data'
import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrls: ['./pedido-card.component.scss']
})
export class PedidoCardComponent {

    entrega=0;
    producto= 0;
    pedidoId="3454";
    pedidoCalificado=false;
    pedidoEntregado=false;;


  




  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }
  openDialog(): void {
    if(this.pedidoEntregado){

    const dialogRef = this.dialog.open(DialogoEvaluacionComponent, {

      data: {pedidoId:this.pedidoId,entrega: this.entrega, producto: this.producto}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.producto = result.producto;
      this.entrega = result.entrega;
      this.pedidoCalificado=true;
    });
  }else{
    this.openSnackBar()
  }
  }
  abrirPanel(panel:MatExpansionPanel){
    this.pedidoEntregado=!panel.expanded;
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

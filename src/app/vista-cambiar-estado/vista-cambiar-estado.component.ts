import { Component, OnInit } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import { Pedido } from '../models/pedido.model';
import { Estado } from '../models/envio.model';
import { Carrito } from '../models/carrito.model';
import {EstadoPago} from '../models/pago.model';
import {CompraService} from '../servicios/compra.service';

@Component({
  selector: 'app-vista-cambiar-estado',
  templateUrl: './vista-cambiar-estado.component.html',
  styleUrls: ['./vista-cambiar-estado.component.scss']
})
export class VistaCambiarEstadoComponent implements OnInit {

  public pedidos : Pedido[]= this.compra.pedidos;

  displayedColumns: string[] = ["ID" ,'Correo Cliente', 'Fecha', 'Pago', 'Estado'];
  dataSource = this.pedidos;

  constructor( private compra : CompraService ) { }

  ngOnInit(): void {

  }

}

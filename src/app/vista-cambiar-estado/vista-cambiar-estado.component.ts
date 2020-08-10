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

  displayedColumns: string[] = ["Id" ,'CorreoC',"total" ,  'Fecha', 'Pago', 'Estado' , "Cambiar"];
  dataSource = this.pedidos;

  constructor( private compra : CompraService ) { }

  ngOnInit(): void {

  }

  pago : any[] = [
    { Estado : "Cancelado"},
    { Estado : "Pendiente"}
  ]

  envio : any[] = [
    { Estado : "Fabricación"},
    { Estado : "Almacenado"},
    { Estado : "Enviado"},
    { Estado : "Entregado"}
  ]

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selectedFood = this.foods[2].value;
  selectedPago = "";
  selectedEnvio = "";

  setSelectedPago ( numero ){
    this.selectedPago = this.pago[numero].Estado;
  }
  setSelectedEnvio( numero ){
    this.selectedEnvio = this.envio[numero].Estado;
  }

}

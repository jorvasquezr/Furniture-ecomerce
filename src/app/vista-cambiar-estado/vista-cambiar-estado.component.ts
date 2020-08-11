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

  selectedPago : String[] = [];
  selectedEnvio : String[] = [];

  setSelectedPago ( numero ){
    return this.pago[numero].Estado;
  }
  setSelectedEnvio( numero ){
    return this.envio[numero].Estado;
  }

  guardarCambios(idPedido: number){
    var pago = this.cambiarPago(idPedido);
    var envio = this.cambiarEnvio(idPedido);
    //console.log(idPedido,pago,envio, this.selectedPago[idPedido], this.selectedEnvio[idPedido]);
    this.compra.cambiarEstados(idPedido,pago,envio);
    location.reload()
  }

  private cambiarPago(idPedido: number){
    if(this.selectedPago[idPedido] == "Cancelado"){
      return 0
    }
    if(this.selectedPago[idPedido] == "Pendiente"){
      return 1
    }
    else{
      return 1
    }
  }
  private cambiarEnvio(idPedido: number){
    if(this.selectedEnvio[idPedido] == "Fabricación"){
      return 0
    }
    if(this.selectedEnvio[idPedido] == "Almacenado"){
      return 1
    }
    if(this.selectedEnvio[idPedido] == "Enviado"){
      return 2
    }
    if(this.selectedEnvio[idPedido] == "Entregado"){
      return 3
    }
    else{
      return 0
    }
  }

}

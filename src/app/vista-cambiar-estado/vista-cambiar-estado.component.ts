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

  selectedPago = "";
  selectedEnvio = "";

  setSelectedPago ( numero ){
    return this.pago[numero].Estado;
  }
  setSelectedEnvio( numero ){
    return this.envio[numero].Estado;
  }

  guardarCambios(idPedido: number){
    var pago = this.cambiarPago();
    var envio = this.cambiarEnvio();
    //console.log(idPedido,pago,envio, this.selectedPago, this.selectedEnvio);
    this.compra.cambiarEstados(idPedido,pago,envio);
    location.reload()
  }

  private cambiarPago(){
    if(this.selectedPago == "Cancelado"){
      return 0
    }
    if(this.selectedPago == "Pendiente"){
      return 1
    }
    else{
      return 1
    }
  }
  private cambiarEnvio(){
    if(this.selectedEnvio == "Fabricación"){
      return 0
    }
    if(this.selectedEnvio == "Almacenado"){
      return 1
    }
    if(this.selectedEnvio == "Enviado"){
      return 2
    }
    if(this.selectedEnvio == "Entregado"){
      return 3
    }
    else{
      return 0
    }
  }

}

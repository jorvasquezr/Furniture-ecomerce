import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http"
import { MatSelect, MatExpansionPanel, MatStep, MatSnackBar } from '@angular/material';
import {LoginService} from '../servicios/login.service'
import {Pago,EstadoPago} from '../models/pago.model'
import {Envio, Estado} from '../models/envio.model'
import {Pedido} from '../models/pedido.model'
import {Location} from '@angular/common'

import {UserRole} from '../models/user.model'
import { CompraService } from '../servicios/compra.service';
import { ProductoService } from '../servicios/producto.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup:FormGroup;
  isEditable = false;
  formulario:boolean;

  provincias: Array<String>=[];
  cantones:Array<String>=[];
  distritos:Array<String>=[];
  meses:Array<String>=["01","02","03","04","05","06","07","08","09","10","11","12"];
  anyos:Array<String>=[];

  indexProvincia:number;
  indexCanton:number;
  indexDistrito:number;


  constructor(private location:Location,private _productServ:ProductoService,private _snackBar:MatSnackBar,private compra:CompraService,private loginService:LoginService,private http: HttpClient,private _formBuilder: FormBuilder) {
    this.listaDeProvincias();
    this.setNextYears();

  }
  get metodoPago(){
    return ["Targeta","Efectivo"]
  }
  get pagaConTarjeta(){
    return this.fourthFormGroup.controls['metodoPago'].value ==='Targeta';

  }
  setNextYears(){
    const actualYear=(new Date()).getFullYear();
    this.anyos.push(actualYear.toString())
    for(let i = 0; i<8;i++){
      this.anyos.push((actualYear+i).toString())
    }

  }
  openSnackBar(mensage:string, action:string) {
    this._snackBar.open(mensage, action, {
      duration: 2000,
    });
  }

  get empleadoLogged(){
    if(this.loginService.usuarioActual!==undefined){
      return this.loginService.usuarioActual.tipo===2;
    }
    return false;
    

  }
  

  ngOnInit() {
    this.thirdFormGroup = this._formBuilder.group({
      correo: ['', Validators.required],
      name:['', Validators.required],
      lastName: ['',Validators.required],
      phone: ['',Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      metodoPago: ['', Validators.required]
    });
    this.firstFormGroup = this._formBuilder.group({
      calle: ['', Validators.required],
      solicitudDeEnvio:[false, Validators.required],
      provincia: ['',Validators.required],
      direccion: ['',Validators.required],
      canton: ['',Validators.required],
      distrito: ['',Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      numeroTargeta: ['', Validators.required],
      nombreTargerta: ['', Validators.required],
      mesVencimiento: ['', Validators.required],
      annyoVencimiento: ['', Validators.required],
      csv: ['', Validators.required]
    });
  }
  listaDeProvincias() {
    this.http.get("https://ubicaciones.paginasweb.cr/provincias.json").subscribe(data=>{
      this.provincias=Object.values(data);
   

    })
  }
  listaDeCantones(provincia:number) {
    if(provincia !==undefined){
    this.http.get("https://ubicaciones.paginasweb.cr/provincia/"+provincia+"/cantones.json").subscribe(data=>{
      this.cantones=Object.values(data);
    })
  }
  }
  listaDeDistritos(provincia:number, canton:number) {
    if(provincia!==undefined && canton !==undefined){
    this.http.get("https://ubicaciones.paginasweb.cr/provincia/"+provincia+"/canton/"+canton+"/distritos.json").subscribe(data=>{
      this.distritos=Object.values(data);
    })
  }
  }
  
  provinciaChange(){  
    if(this.provincias!==[]){
    this.listaDeCantones(this.provincias.indexOf(this.firstFormGroup.controls["provincia"].value)+1)
    this.firstFormGroup.controls["canton"].setValue("")
    this.firstFormGroup.controls["distrito"].setValue("")
    }
  }
  cantonChange(){
    if(this.cantones!==[] && this.provincias!=[]){
    this.listaDeDistritos(this.provincias.indexOf(this.firstFormGroup.controls["provincia"].value)+1,
                          this.cantones.indexOf(this.firstFormGroup.controls["canton"].value)+1)

    this.firstFormGroup.controls["distrito"].setValue("")
    }
  }
  public mostrar(){
    console.log(this.secondFormGroup)

  }
  formularioEnvio(expansion:MatExpansionPanel,matStep:MatStep){
    
    let value=this.firstFormGroup.controls["solicitudDeEnvio"].value
    matStep.optional=!value;
    expansion.disabled=value;
    expansion.expanded=value;
  }

  terminarPedido(){
    const clienteData:FormGroup= this.thirdFormGroup;
    const envioData:FormGroup=this.firstFormGroup;
    const metodoPago:FormGroup=this.fourthFormGroup;
    var pago:Pago;
    pago.estado=(metodoPago.controls['metodoPago'].value=='Efectivo')? EstadoPago.PENDIENTE:EstadoPago.CANCELADO;
    pago.idPago=this.compra.getMicarrito().id;
    pago.medio=metodoPago.controls['metodoPago'].value;
    pago.totalPagado=this.compra.getTotal();

    var envio:Envio;
    envio.provincia=envioData.controls['provincia'].value;
    envio.canton=envioData.controls['canton'].value;
    envio.distrito=envioData.controls['distrito'].value;
    envio.barrio=envioData.controls['calle'].value;
    envio.direccion=envioData.controls['direccion'].value;
    envio.estado=Estado.FABRICACION;
    envio.pais='Costa Rica'
    envio.precio=10000;

    this.compra.agregarEnvio(envio);
    this.compra.agregarPago(pago);
    if(this.loginService.usuarioActual.tipo==UserRole.EMPLEADO){
      this.compra.agregarCorreoCliente(clienteData.controls['correo'].value);
    }

    if(this.compra.registrarPedido()){

      this.openSnackBar("Pedido registrado correctamente","ok");
      console.log(this.compra.getPedidos(this.loginService.usuarioActual.email))
      this.location.back();

    }else{
      this.openSnackBar("Error al registrar pedido","ok");

    }



  }


}
/*
carrito:Carrito[];
id:number;
correoCliente:string;
envio?:Envio;
pago?:Pago;
calEntrega:0;
calProducto:0;
calificado:boolean;

export interface Pago {
    estado: EstadoPago;
    totalPagado:number;
    idPago:number;
    medio:string;
}

export enum EstadoPago{
    CANCELADO=0,
    PENDIENTE=1
}


export interface Envio {
    provincia:string;
    pais:string;
    canton:string;
    distrito:string;
    direccion: string;
    barrio:string;
    estado: Estado;
    precio: number;
}

export enum Estado {
    FABRICACION=0,
    ALMACENADO=1,
    ENVIADO=2,
    ENTREGADO=3
}


*/
import { Component, OnInit } from '@angular/core';
import {sucursal} from "../models/sucursal.model";
import {SucursalesService} from '../servicios/sucursales.service'

@Component({
  selector: 'app-vista-sucursales',
  templateUrl: './vista-sucursales.component.html',
  styleUrls: ['./vista-sucursales.component.scss']
})
export class VistaSucursalesComponent implements OnInit {

  public sucursales : sucursal[] = this.agregar.sucursales;

  nombre = "";
  ubicacion = "";
  empleados = 1;
  ganancias = 1;
  talleres = [];
  nuevoTaller = "";

  agregarSucursal(){
    this.agregar.agregarSucursal( this.nombre, this.ubicacion, this.empleados, this.ganancias)
    location.reload()
  }

  agregarTaller( nombre, ubicacion, empleados, ganancia, talleres){
    this.agregar.agregarTaller( nombre, ubicacion, empleados, ganancia, talleres , this.nuevoTaller )
    location.reload()
  }

  constructor( private agregar : SucursalesService) { }

  ngOnInit(): void {
  }

}

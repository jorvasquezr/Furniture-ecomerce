import { Component, OnInit } from '@angular/core';
import {MatFormField, MatTableDataSource, MatSelectChange} from '@angular/material';
import {Producto} from '../models/producto.model';
import {Promo} from '../models/promo.model';
import { SelectionModel } from '@angular/cdk/collections';
import {PromoService} from '../servicios/promo.service';
import {ProductoService} from '../servicios/producto.service';
import {sucursal} from '../models/sucursal.model';
import {SucursalesService} from '../servicios/sucursales.service';
import {ReportesService} from '../servicios/reportes.service';
import {EmpleadosService} from '../servicios/empleados.service';
import { Reporte } from '../models/reporte.model';
import { Empleado } from '../models/empleado.model';



const empleados: Empleado[] = [];

const datosTabla: Producto[] = [];

const promos: Promo[] = [];


@Component({
  selector: 'app-vista-gerente',
  templateUrl: './vista-gerente.component.html',
  styleUrls: ['./vista-gerente.component.scss']
})

export class VistaGerenteComponent implements OnInit {
  sucursales: sucursal[] = [];
  reportes: Reporte[] = [];
  displayedColumns: string[] = ['select', 'id', 'nombre', 'precio', 'descripcion'];
  displayedColumns2: string[] = ['nombre', 'puesto', 'salario', 'sucursal'];
  displayedColumns3: string[] = ['id', 'nuevoPrecio', 'fechaFin'];
  displayedColumns4: string[] = ['id', 'nombre', 'precio', 'descripcion'];
  dataSource = new MatTableDataSource<Producto> (datosTabla);
  selection = new SelectionModel<Producto>(true, []);
  precioPromo: number;
  fechaMaxima: Date;
  dataSource2 = new MatTableDataSource<Empleado> (empleados);
  dataSource3 = new MatTableDataSource<Promo> ([]);
  selected: any = -1;
  gridsize = 0;
  step = 0;
  nombreNuevoProducto: string;
  precioNuevoProducto: number;
  descripcionNuevoProducto: string;
  urlImagenProducto: string;
  gananciaBruta: number;
  gastosPorMes: number;
  porcentajeVentas: number;
  gananciaNeta: number;
  nombreEmpleado: string;
  puestoEmpleado: string;
  salarioEmpleado: number;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateSetting(event) {
    this.gridsize = event.value;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  crearEmpleado(){
    const  empleadoNuevo: Empleado = {nombre:this.nombreEmpleado, puesto:this.puestoEmpleado, salario:this.salarioEmpleado, sucursal:"San Jose"};
    this.empleadosService.tablaCambiada(empleadoNuevo).subscribe((data: Empleado[]) => {this.dataSource2.data = data; });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  crearPromocion(){
    if (!this.fechaMaxima || this.selected === -1 || this.gridsize === 0){
      return;
    }
    const nuevaPromo: Promo = {idProducto: this.selected.id,
      nuevoPrecio: (this.gridsize * (this.selected.precio / 100)), fechaFinal: this.fechaMaxima};
    this.servicioPromos.tablaCambiada(nuevaPromo).subscribe((data: Promo[]) => {
      this.dataSource3.data = data;
    });
  }
  /*Agregar que inserte imagen //

░█████╗░░██████╗░██████╗░███████╗░██████╗░░█████╗░██████╗░  ██╗███╗░░░███╗░█████╗░░██████╗░███████╗███╗░░██╗
██╔══██╗██╔════╝░██╔══██╗██╔════╝██╔════╝░██╔══██╗██╔══██╗  ██║████╗░████║██╔══██╗██╔════╝░██╔════╝████╗░██║
███████║██║░░██╗░██████╔╝█████╗░░██║░░██╗░███████║██████╔╝  ██║██╔████╔██║███████║██║░░██╗░█████╗░░██╔██╗██║
██╔══██║██║░░╚██╗██╔══██╗██╔══╝░░██║░░╚██╗██╔══██║██╔══██╗  ██║██║╚██╔╝██║██╔══██║██║░░╚██╗██╔══╝░░██║╚████║
██║░░██║╚██████╔╝██║░░██║███████╗╚██████╔╝██║░░██║██║░░██║  ██║██║░╚═╝░██║██║░░██║╚██████╔╝███████╗██║░╚███║
╚═╝░░╚═╝░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝  ╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚══╝


  */
  crearProducto(){
    if (!this.nombreNuevoProducto) {
      return;
    }
    const nuevoID = this.servicioProductos.getLastID() + 1;
    const nuevoProducto: Producto = {nombre: this.nombreNuevoProducto, precio: this.precioNuevoProducto,
      id: nuevoID, descripcion: this.descripcionNuevoProducto,imagenUrl:this.urlImagenProducto};//<---- here
    this.servicioProductos.tablaCambiada(nuevoProducto).subscribe((data: Producto[]) => {
      this.dataSource.data = data;
    })
  }
  cambiarDatosReporte(event:MatSelectChange){
    console.log(event.source.value);
    for (let i=0; i<this.reportes.length; i++){
      if (this.reportes[i].nombreSucursal === event.source.value){
        this.gananciaBruta = this.reportes[i].gananciaBrutaPorMes;
        this.gananciaNeta = this.reportes[i].gananciaNeta;
        this.gastosPorMes = this.reportes[i].gastosPorMes;
        this.porcentajeVentas = this.reportes[i].porcentajeVentas;
      }
    }

  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Producto): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  constructor(
    private servicioPromos: PromoService,
    private servicioProductos: ProductoService,
    private servicioSucursales: SucursalesService,
    private servicioReportes: ReportesService,
    private empleadosService: EmpleadosService
  ) {this.servicioPromos.tablaCambiada().subscribe((data: Promo[]) => {
    this.dataSource3.data = data;
  });this.servicioProductos.tablaCambiada().subscribe((data: Producto[]) =>
    this.dataSource.data = data);
     this.empleadosService.tablaCambiada().subscribe((data: Empleado[]) =>
    this.dataSource2.data = data);
     this.sucursales = servicioSucursales.sucursales;
     this.reportes = servicioReportes.reportes;
  }

  ngOnInit(): void {
  }

}


import { Component, OnInit } from '@angular/core';
import {MatFormField, MatTableDataSource} from '@angular/material';
import {Producto} from '../models/producto.model';
import {Promo} from '../models/promo.model';
import { SelectionModel } from '@angular/cdk/collections';
import {PromoService} from '../servicios/promo.service';
import {ProductoService} from '../servicios/producto.service';
import {sucursal} from '../models/sucursal.model';
import {SucursalesService} from '../servicios/sucursales.service';
export interface trabajador{
  nombre: string;
  puesto: string;
  salario: string;
  sucursal: string;
}



const empleados: trabajador[] = [

  {
    nombre: 'Pedro',
    puesto: 'Gerente',
    salario: '100',
    sucursal: 'Cartago'
  },
  {
    nombre: 'Maria',
    puesto: 'Vendedor',
    salario: '10',
    sucursal: 'Cartago'
  },
  {
    nombre: 'Saul',
    puesto: 'Cajero',
    salario: '20',
    sucursal: 'Cartago'
  },
  {
    nombre: 'Mario',
    puesto: 'Cajero',
    salario: '10',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Astolfo',
    puesto: 'Gerente',
    salario: '10',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Lucia',
    puesto: 'Vendedor',
    salario: '10',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Maria',
    puesto: 'Vendedor',
    salario: '18',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Astolfo',
    puesto: 'Gerente',
    salario: '10',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Luz',
    puesto: 'Cajero',
    salario: '12',
    sucursal: 'San Jose'
  },
  {
    nombre: 'Manuela',
    puesto: 'Gerente',
    salario: '75',
    sucursal: 'San Carlos'
  },
  {
    nombre: 'Estefania',
    puesto: 'Vendedor',
    salario: '15',
    sucursal: 'San Carlos'
  },

];

const datosTabla: Producto[] = [];

const promos: Promo[] = [];
const datosTabla: Producto[] = [];

@Component({
  selector: 'app-vista-gerente',
  templateUrl: './vista-gerente.component.html',
  styleUrls: ['./vista-gerente.component.scss']
})

export class VistaGerenteComponent implements OnInit {
  sucursales: sucursal[] = [];
  displayedColumns: string[] = ['select', 'id', 'nombre', 'precio', 'descripcion'];
  displayedColumns2: string[] = ['nombre', 'puesto', 'salario', 'sucursal'];
  displayedColumns3: string[] = ['id', 'nombre', 'nuevoPrecio', 'fechaFin'];
  displayedColumns4: string[] = ['id', 'nombre', 'precio', 'descripcion'];
  dataSource = new MatTableDataSource<Producto> (datosTabla);
  selection = new SelectionModel<Producto>(true, []);
  precioPromo: number;
  fechaMaxima: Date;
  dataSource2 = empleados;
  dataSource3 = new MatTableDataSource<Promo> ([]);
  selected: any = -1;
  gridsize = 0;
  nombreNuevoProducto: string;
  precioNuevoProducto: number;
  descripcionNuevoProducto: string;
  updateSetting(event) {
    this.gridsize = event.value;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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
    const nuevaPromo: Promo = {idProducto: this.selected.id, nombreProducto: this.selected.nombre,
      nuevoPrecio: (this.gridsize * (this.selected.precio / 100)), fechaFinal: this.fechaMaxima};
    this.servicioPromos.tablaCambiada(nuevaPromo).subscribe((data: Promo[]) => {
      this.dataSource3.data = data;
    });
  }
  crearProducto(){
    if (!this.nombreNuevoProducto) {
      return;
    }
    const nuevoID = this.servicioProductos.getLastID() + 1;
    const nuevoProducto: Producto = {nombre: this.nombreNuevoProducto, precio: this.precioNuevoProducto,
      id: nuevoID, descripcion: this.descripcionNuevoProducto};
    this.servicioProductos.tablaCambiada(nuevoProducto).subscribe((data: Producto[]) => {
      this.dataSource.data = data;
    })
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
    private servicioSucursales: SucursalesService
  ) {this.servicioPromos.tablaCambiada().subscribe((data: Promo[]) => {
    this.dataSource3.data = data;
  });this.servicioProductos.tablaCambiada().subscribe((data: Producto[]) =>
    this.dataSource.data = data);
     this.sucursales = servicioSucursales.sucursales;
  }

  ngOnInit(): void {
  }

}


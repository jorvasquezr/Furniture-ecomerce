import { Component, OnInit } from '@angular/core';
import {Producto} from '../models/producto.model';
import {ProductoService} from '../servicios/producto.service';
import {ProductoDisponible} from '../models/productoDisponible';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.component.html',
  styleUrls: ['./agregar-inventario.component.scss']
})



export class AgregarInventarioComponent implements OnInit {
  displayedColumns: string[] = ['select', 'idProducto', 'cantidad'];
  dataSource: MatTableDataSource<ProductoDisponible>;
  selected: any = -1;
  cantidad: number;
  selection = new SelectionModel<Producto>(true, []);
  productosDisponibles: ProductoDisponible[] = [];

  constructor(private servicioProducto: ProductoService) {
    this.productosDisponibles = this.servicioProducto.productosDisponibles;
    this.dataSource = new MatTableDataSource<ProductoDisponible> (this.productosDisponibles);
  }
  ngOnInit(): void {
  }
  agregar(){
    const x = Number(this.cantidad);
    for (let i=0; i<this.productosDisponibles.length; i++){
      if (this.productosDisponibles[i].idProducto === this.selected.idProducto){
        this.productosDisponibles[i].cantidad += x;
      }
    }
    this.dataSource.data=this.productosDisponibles;
  }
  checkboxLabel(row?: Producto): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
}

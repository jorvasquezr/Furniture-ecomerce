import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {puesto} from "../models/puestos.model"
import {RangoSalariosService} from "../servicios/rango-salarios.service"





@Component({
  selector: 'app-rango-salarios',
  templateUrl: './rango-salarios.component.html',
  styleUrls: ['./rango-salarios.component.scss']
})
export class RangoSalariosComponent implements OnInit {

  private listPuestos : puesto[] = this.rango.listPuestos;
 

  panelOpenState = false;

  value = 10;

  hacerCambios(puesto, salariomin, salariomax){
    this.rango.hacerCambios(puesto, salariomin, salariomax);
    location.reload();
  }

  displayedColumns: string[] = ['nombre', 'salarioMin', 'salarioMax'];
  dataSource = new MatTableDataSource(this.listPuestos);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private rango : RangoSalariosService) {   }

  

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  updateSetting(event) {
    this.value = event.value;
  }
}

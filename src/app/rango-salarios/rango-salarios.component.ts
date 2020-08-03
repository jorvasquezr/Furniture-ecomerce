import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { elementAt } from 'rxjs/operators';

export interface puesto {
  nombre: string;
  salarioMin: number;
  salarioMax: number;
}



@Component({
  selector: 'app-rango-salarios',
  templateUrl: './rango-salarios.component.html',
  styleUrls: ['./rango-salarios.component.scss']
})
export class RangoSalariosComponent implements OnInit {

  private listPuestos : puesto[] = [
    {
      nombre : "Gerente",
      salarioMin : 50,
      salarioMax : 150
    },
    {
      nombre : "Vendedor",
      salarioMin : 10,
      salarioMax : 50
    },
    {
      nombre : "Cajero",
      salarioMin : 10,
      salarioMax : 60
    },
  ]
 

  panelOpenState = false;

  value = 0;

  hacerCambios(puesto, salariomin, salariomax){
    const nuevo = 
    {
      nombre : puesto,
      salarioMin : salariomin,
      salarioMax : salariomax
    }

    const i = this.listPuestos.findIndex(user=>
      user.nombre === puesto
    )
    delete this.listPuestos[i];
    this.listPuestos.push(nuevo);

    console.log( nuevo )

    location.reload()
  }

  displayedColumns: string[] = ['nombre', 'salarioMin', 'salarioMax'];
  dataSource = new MatTableDataSource(this.listPuestos);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    localStorage.setItem("listaEncuestion", JSON.stringify(this.listPuestos));
    JSON.parse(localStorage.getItem("listaEncuestion")) as puesto[]
  }
}

import { Component, OnInit } from '@angular/core';

export interface taller {
  nombre : string 
}

export interface sucursal {
  nombre: string;
  ubicacion: string;
  empleados: number;
  ganancias: number;
  talleres : taller[];
}

@Component({
  selector: 'app-vista-gg',
  templateUrl: './vista-gg.component.html',
  styleUrls: ['./vista-gg.component.scss']
})
export class VistaGGComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

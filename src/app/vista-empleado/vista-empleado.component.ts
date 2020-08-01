import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista-empleado',
  templateUrl: './vista-empleado.component.html',
  styleUrls: ['./vista-empleado.component.scss']
})
export class VistaEmpleadoComponent implements OnInit {

  page:String = 'Inicio';
  constructor(){}

  public pageSet(nombre:String) {
    this.page=nombre;
    
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-empleado',
  templateUrl: './vista-empleado.component.html',
  styleUrls: ['./vista-empleado.component.scss']
})
export class VistaEmpleadoComponent {
  title = 'Empleado';
  page:String = 'Venta';
  constructor(){}

  public pageSet(nombre:String) {
    this.page=nombre;
    
  }

}

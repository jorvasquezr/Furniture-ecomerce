import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.scss']
})
export class VistaClienteComponent implements OnInit {
  page:String = 'Tienda';
  constructor(public router:Router){}

 
  public iniciarSesion(){
    this.router.navigateByUrl('vista-login')
  }
  

  public pageSet(nombre:String) {
    this.page=nombre;
    
  }

  ngOnInit(): void {
  }

}

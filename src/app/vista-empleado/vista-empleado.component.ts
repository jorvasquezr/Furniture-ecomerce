import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CompraService } from "../servicios/compra.service";
import {LoginService} from '../servicios/login.service'


@Component({
  selector: 'app-vista-empleado',
  templateUrl: './vista-empleado.component.html',
  styleUrls: ['./vista-empleado.component.scss']
})
export class VistaEmpleadoComponent implements OnInit {
  page:String = '';
  name:String = '';
  
  constructor(private compraServ:CompraService,private logSer:LoginService,public router:Router, public activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(params => {
      this.page=params.param;
    });
  }
  get userLogged(){
    return this.logSer.usuarioLogeado();
  }
  cerrarSesion(){
    this.compraServ.limpiarCarrito();

    this.logSer.cerrarSesion();


    this.router.navigateByUrl("cliente/tienda")
  }

  public configuraciones(){
    this.router.navigateByUrl('configuraciones-accesibilidad'); 
  }

  public pageSet(nombre:String) {
    this.router.navigateByUrl('empleado/'+nombre); 

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

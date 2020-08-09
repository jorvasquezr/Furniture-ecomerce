import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CompraService } from "../servicios/compra.service";
import {LoginService} from '../servicios/login.service'

@Component({
  selector: 'app-vista-cliente',
  templateUrl: './vista-cliente.component.html',
  styleUrls: ['./vista-cliente.component.scss']
})
export class VistaClienteComponent implements OnInit {
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
    console.log(this.logSer)
    this.compraServ.limpiarCarrito();
    this.logSer.cerrarSesion();
    this.pageSet("tienda")
  }

  public iniciarSesion(){
    this.router.navigateByUrl('vista-login')
  }
  public registrarse(){
    this.router.navigateByUrl('vista-register')
  }

  

  public pageSet(nombre:String) {
    this.router.navigateByUrl('cliente/'+nombre);    
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

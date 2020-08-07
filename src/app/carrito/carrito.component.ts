import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CompraService } from '../servicios/compra.service';
import { LoginService } from '../servicios/login.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent  {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public pedido:Pedido;

    public total:number;
    public descuento:number;
    public totalNeto:number;
    public cantidadProductos:number;

  constructor(private auth : LoginService,private compraService : CompraService, private breakpointObserver: BreakpointObserver) {
    if(this.auth.usuarioActual!=null){
      this.pedido = this.compraService.getMicarrito(auth.usuarioActual.email);
        for (let i = 0; i < this.pedido.carrito.length; i++) {
          
      }
    }
  }

  ngOnInit(): void {

  }

}

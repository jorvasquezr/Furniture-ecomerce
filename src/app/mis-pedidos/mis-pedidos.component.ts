import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../servicios/login.service';
import { CompraService } from '../servicios/compra.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-mis-pedidos',
  templateUrl: './mis-pedidos.component.html',
  styleUrls: ['./mis-pedidos.component.scss']
})
export class MisPedidosComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public pedidos: Pedido[]= [];

  constructor(private auth : LoginService, private compraService : CompraService, private breakpointObserver: BreakpointObserver) {
    if(this.auth.usuarioActual!=null)
      this.pedidos = compraService.getPedidos(auth.usuarioActual.email);
  }

}


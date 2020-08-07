import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CompraService } from '../servicios/compra.service';
import { Carrito } from '../models/carrito.model';

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
    public carrito:Carrito[];
  constructor(private compraService : CompraService, private breakpointObserver: BreakpointObserver) {
    this.carrito = this.compraService.carrito;
  }

  ngOnInit(): void {

  }

}

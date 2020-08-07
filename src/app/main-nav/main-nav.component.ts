import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CompraService } from '../servicios/compra.service';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public productosOfrecidos: Producto[];

  constructor(private compraService : CompraService,private breakpointObserver: BreakpointObserver) {
    this.productosOfrecidos= this.compraService.productosOfrecidos ;
  }
}

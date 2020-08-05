import { Injectable } from '@angular/core';
import {Promo} from '../models/promo.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PromoService {
  datos: Promo[] = [{idProducto: 1, nombreProducto:'Sillon', nuevoPrecio: 25, fechaFinal: new Date()}];
  tablaCambiada(nuevaPromo?: Promo): Observable<Promo[]>{
    const nuevaLista = this.datos;
    if (nuevaPromo) {
      nuevaLista.push(nuevaPromo);
    }
    return of(nuevaLista);
  }


  constructor() { }
}

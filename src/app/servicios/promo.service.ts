import { Injectable } from '@angular/core';
import {Promo} from '../models/promo.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PromoService {
  datos: Promo[] = [{idProducto: 1, nuevoPrecio: 25, fechaFinal: new Date()}];

  constructor(){
    if (localStorage.getItem("listaPromos") === null) {
      localStorage.setItem("listaPromos", JSON.stringify(this.datos));
    }
    else{
      var filtered = JSON.parse(localStorage.getItem("listaPromos")) as Promo[];
      var filtered = filtered.filter(function (el) {
        return el != null;
      });
      this.datos = filtered;
      console.log(this.datos);
    }
   }
  tablaCambiada(nuevaPromo?: Promo): Observable<Promo[]>{
    this.datos;
    if (nuevaPromo) {
      this.datos.push(nuevaPromo);
      this.hacerCambios();
    }
    return of(this.datos);
  }
  hacerCambios(){
    localStorage.setItem("listaPromos", JSON.stringify(this.datos));
  }
}

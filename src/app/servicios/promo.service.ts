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
      console.log("hola")
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
    const nuevaLista = this.datos;
    if (nuevaPromo) {
      nuevaLista.push(nuevaPromo);
      this.hacerCambios();
    }
    return of(nuevaLista);
  }
  hacerCambios(){
    localStorage.setItem("listaPromos", JSON.stringify(this.datos));
  }
}

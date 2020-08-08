import { Producto } from './producto.model';
import { Promo } from './promo.model';

export interface Carrito {
    producto?: Producto;
    promo?: Promo;
    cantidad: number;
    tipo:CarritoRole;
}

export enum CarritoRole {
    PRODUCTO=0,
    PROMO=1
}
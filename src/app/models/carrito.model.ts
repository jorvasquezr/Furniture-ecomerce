import { Producto } from './producto.model';

export interface Carrito {
    producto: Producto;
    cantidad: number;
}
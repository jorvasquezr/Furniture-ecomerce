import { Producto } from './producto.model';
import { Promo } from './promo.model';

export interface Carrito {
    idProducto: number;
    cantidad: number;
    
}
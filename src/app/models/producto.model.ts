import { Promo } from './promo.model';

export interface Producto {
    precio: number;
    id: number;
    nombre: string;
    descripcion: string;
    promocion?: Promo;
    imagenUrl:string;
}

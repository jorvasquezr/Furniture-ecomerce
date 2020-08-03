import { Producto } from "./producto.model";

export interface envio {
    destino: string;
    estado: string;
    producto: Producto;
    precio: number;
}
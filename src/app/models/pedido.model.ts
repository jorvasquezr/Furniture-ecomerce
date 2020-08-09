import { Carrito } from './carrito.model';
import { Envio } from './envio.model';
import { Pago } from './pago.model';

export interface Pedido {
    carrito:Carrito[];
    id:number;
    correoCliente:string;
    envio?:Envio;
    pago?:Pago;
    calEntrega:0;
    calProducto:0;
    calificado:boolean;
}
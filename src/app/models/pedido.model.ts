import { Carrito } from './carrito.model';
import { Envio } from './envio.model';
import { Pago } from './pago.model';

export interface Pedido {
    carrito:Carrito[];
    id:number;
    correoCliente:string;
    envio?:Envio;
    pago?:Pago;
    fecha?:string;
    calEntrega:number;
    calProducto:number;
    calificado:boolean;
    correoEmpleado?:string;
}
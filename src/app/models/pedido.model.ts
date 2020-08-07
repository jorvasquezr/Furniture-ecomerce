import { Carrito } from './carrito.model';
import { Envio } from './envio.model';
import { Pago } from './pago.model';

export interface Pedido {
    carrito:Carrito[];
    correoCliente:string;
    envio?:Envio;
    pago?:Pago;
}
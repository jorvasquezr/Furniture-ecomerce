import { Carrito } from './carrito.model';
import { Envio } from './envio.model';
import { Pago } from './pago.model';

export interface Pedido {
    carrito:Carrito[];
    id:number;
    correoCliente:string;
    estado:Estado;
    envio?:Envio;
    pago?:Pago;
    calEntrega:0
    calProducto:0
    calificado:boolean

}

export enum Estado {
    FABRICACION=0,
    ALMACENADO=1,
    ENVIADO=2,
    ENTREGADO=3
}
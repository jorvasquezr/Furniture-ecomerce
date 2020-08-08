export interface Pago {
    estado: EstadoPago;
    totalPagado:number;
    precio:number;
    idPago:number;
    medio:string;
}

export enum EstadoPago{
    CANCELADO=0,
    PENDIENTE=1
}
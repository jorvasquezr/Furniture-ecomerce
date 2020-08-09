export interface Envio {
    provincia:string;
    pais:string;
    canton:string;
    distrito:string;
    direccion: string;
    barrio:string;
    estado: Estado;
    precio: number;
}

export enum Estado {
    FABRICACION=0,
    ALMACENADO=1,
    ENVIADO=2,
    ENTREGADO=3
}
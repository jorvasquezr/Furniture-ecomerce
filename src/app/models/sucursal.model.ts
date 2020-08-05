import {taller} from './taller.model'

export interface sucursal {
    nombre: string;
    ubicacion: string;
    empleados: number;
    ganancias: number;
    talleres : taller[];
  }
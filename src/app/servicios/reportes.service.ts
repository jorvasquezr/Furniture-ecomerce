import { Injectable } from '@angular/core';
import { Reporte } from '../models/reporte.model';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  reportes: Reporte[] = [{nombreSucursal:"Central", gananciaBrutaPorMes:25000, gananciaNeta: 15000, gastosPorMes:10000, porcentajeVentas:46},
{nombreSucursal:"San jose", gananciaBrutaPorMes:24500, gananciaNeta:13000, gastosPorMes: 12000, porcentajeVentas: 20},
{nombreSucursal:"San Carlos", gananciaBrutaPorMes:50000, gananciaNeta:45000, gastosPorMes: 22000, porcentajeVentas:70}];
  constructor() { }
}

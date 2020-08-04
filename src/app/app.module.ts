import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './views/browse/browse.component';
import { MatCardModule,
  MatPaginatorModule,
  MatTabsModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule ,
  MatDividerModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSelectModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import { VistaGGComponent } from './vista-gg/vista-gg.component';
import { ReportesGeneralesComponent } from './reportes-generales/reportes-generales.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { RangoSalariosComponent } from './rango-salarios/rango-salarios.component';
import { VistaGerenteComponent } from './vista-gerente/vista-gerente.component';
import { VistaLoginComponent } from './vista-login/vista-login.component';
import { VistaRegisterComponent } from './vista-register/vista-register.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { VistaEmpleadoComponent } from './vista-empleado/vista-empleado.component';
import { VistaSalarioComponent } from './vista-salario/vista-salario.component';
import { VistaVentaComponent } from './vista-venta/vista-venta.component';
import {MatSliderModule} from '@angular/material/slider';
import { VistaClienteComponent } from './vista-cliente/vista-cliente.component';
import { FooterComponent } from './footer/footer.component';
import { VistaSucursalesComponent } from './vista-sucursales/vista-sucursales.component';
import { ConfiguracionesAccesibilidadComponent } from './configuraciones-accesibilidad/configuraciones-accesibilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    MainNavComponent,
    AppComponent,
    VistaGGComponent,
    ReportesGeneralesComponent,
    VerEmpleadosComponent,
    RangoSalariosComponent,
    VistaGerenteComponent,
    VistaLoginComponent,
    VistaRegisterComponent,
    ProductCardComponent,
    VistaEmpleadoComponent,
    VistaSalarioComponent,
    VistaVentaComponent,
    VistaClienteComponent,
    VistaSucursalesComponent,
    FooterComponent,
    ConfiguracionesAccesibilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './views/browse/browse.component';
import { MatSelectModule,MatStepperModule,MatCardModule,MatInputModule,MatPaginatorModule,MatTabsModule,MatMenuModule,MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule ,MatDividerModule } from '@angular/material';
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
  MatSelectModule,
  MatCheckboxModule} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
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

import { CarouserlImageComponent } from './carouserl-image/carouserl-image.component';
import { VistaPromoionesComponent } from './vista-promoiones/vista-promoiones.component';
import { DetallesDeProductoComponent } from './detalles-de-producto/detalles-de-producto.component';
import {MatRippleModule,MatCheckboxModule} from '@angular/material';
import { PedidoComponent } from './pedido/pedido.component'
import { HttpClientModule } from "@angular/common/http";
import { MatInputHyphenCardFormatDirective } from './directives/mat-input-hyphen-card-format.directive';
import { MatInputCsvCardFormatDirective } from './directives/mat-input-csv-card-format.directive';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductComponent } from './product/product.component';
import { PedidoCardComponent } from './pedido-card/pedido-card.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
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
    FooterComponent,
    CarouserlImageComponent,
    VistaPromoionesComponent,
    DetallesDeProductoComponent,
    PedidoComponent,
    MatInputHyphenCardFormatDirective,
    MatInputCsvCardFormatDirective,
    CarritoComponent,
    ProductComponent,
    PedidoCardComponent,
    MisPedidosComponent,
    InicioComponent,
    TablaProductosComponent
    VistaSucursalesComponent,
    FooterComponent,
    ConfiguracionesAccesibilidadComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatTabsModule,
    MatRippleModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatStepperModule,
    LayoutModule,
    MatListModule,
    MatDividerModule,
    HttpClientModule,
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
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

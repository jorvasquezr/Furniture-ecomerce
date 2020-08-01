import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './views/browse/browse.component';
import { MatCardModule,MatPaginatorModule,MatTabsModule,MatMenuModule,MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule ,MatDividerModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { VistaGGComponent } from './vista-gg/vista-gg.component';
import { ReportesGeneralesComponent } from './reportes-generales/reportes-generales.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { RangoSalariosComponent } from './rango-salarios/rango-salarios.component';
import { VistaGerenteComponent } from './vista-gerente/vista-gerente.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {FlexLayoutModule} from '@angular/flex-layout'

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
    ProductCardComponent
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
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

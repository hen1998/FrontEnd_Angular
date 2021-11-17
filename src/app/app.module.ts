import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductosComponent } from './pages/productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Global } from './global';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddProductoComponent } from './modals/add-producto/add-producto.component';
import { EditProductoComponent } from './modals/edit-producto/edit-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AddProductoComponent,
    EditProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }

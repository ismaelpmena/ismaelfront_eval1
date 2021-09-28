import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { CarruselComponent } from './compartida/carrusel/carrusel.component';


import { ProductoComponent } from './general/producto/producto.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { HomeComponent } from './pages/home/home.component';
import { PruebasComponent } from './general/pruebas/pruebas.component';
import { RegistroComponent } from './general/registro/registro.component';
import { LoginComponent } from './general/login/login.component';

import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { CarritocomprasComponent } from './general/carritocompras/carritocompras.component';


@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  ProductoComponent,
  CategoriaComponent,
  HomeComponent,
  AsideComponent,
  CarruselComponent,
  FooterComponent,
  PruebasComponent,
  RegistroComponent,
  LoginComponent,
  CarritocomprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

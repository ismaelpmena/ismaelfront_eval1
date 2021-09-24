import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { ProductosComponent } from './compartida/productos/productos.component';
import { CarruselComponent } from './compartida/carrusel/carrusel.component';
import { LoginComponent } from './compartida/login/login.component';
import { RegistroComponent } from './compartida/registro/registro.component';
import { BarroslucoComponent } from './compartida/barrosluco/barrosluco.component';
import { ItalianoComponent } from './compartida/italiano/italiano.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    ProductosComponent,
    CarruselComponent,
    LoginComponent,
    RegistroComponent,
    BarroslucoComponent,
    ItalianoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

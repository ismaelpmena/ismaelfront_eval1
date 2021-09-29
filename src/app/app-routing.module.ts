
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProductoComponent} from './general/producto/producto.component';
import{HomeComponent} from './pages/home/home.component';
import{CategoriaComponent} from './pages/categoria/categoria.component';
import{LoginComponent} from './general/login/login.component';
import{RegistroComponent} from './general/registro/registro.component';
import{HeaderComponent} from './compartida/header/header.component';
import{FooterComponent} from './compartida/footer/footer.component';
import{CarritocomprasComponent} from './general/carritocompras/carritocompras.component';
//referencias a los componenntesss
const app_routes: Routes = [
{ path:'', component: HomeComponent},
{path:'producto', component: ProductoComponent},
{path:'categoria', component : CategoriaComponent},
{path:'login', component : LoginComponent},
{path:'registro', component : RegistroComponent},
{path:'header', component : HeaderComponent},
{path:'footer', component : FooterComponent},
{path:'carritocompras', component : CarritocomprasComponent}


];

@NgModule({
imports: [RouterModule.forRoot(app_routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {

  constructor(public categoriaService: CategoriaService, public productoService: ProductosService) { }
  productos:Producto[]=[];



Mes:number = new Date().getMonth()+1;
nuevoDia:string="";

Dia :number|null|string=null;
Contador: number=0;
dias_semana:string[]=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
eliminado: number|null|string|undefined=null;
  ngOnInit(): void {
  }

//set y get
get getMesNumber():number{
  return this.Mes;
}
get getDiaNumber():number|null|string{
  return this.Dia;
}
get getContadorNumber():number{
  return this.Contador;
}

//metodos o funciones ( logica de negocio k trabajamos en frontend)
obtenerMes(){
  return this.Mes;
}

obtenerDia():void{
  this.Dia =new Date().getDay();
}
sumar(){
  this.Contador++;
}
restar(){

  this.Contador--;
}
agregarDia():void{
  this.dias_semana.push(this.nuevoDia);
}
eliminar():void{
  this.eliminado= this.dias_semana.pop();
}
insertar():void{
console.log("metodo insertar1");
console.log(this.email +""+ this.password);

}
}

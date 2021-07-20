import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    QuienesSomosComponent,
    RegistroComponent,
    IniciarSesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServiciosComponent,
    QuienesSomosComponent,
    RegistroComponent,
    IniciarSesionComponent
  ]
})
export class PagesModule { }

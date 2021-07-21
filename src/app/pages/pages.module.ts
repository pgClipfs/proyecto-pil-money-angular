import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServiciosComponent,
    QuienesSomosComponent,
    RegistroComponent,
    IniciarSesionComponent,
    Pagina404Component,
    IntegranteComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ServiciosComponent,
    QuienesSomosComponent,
    RegistroComponent,
    IniciarSesionComponent
  ]
})
export class PagesModule { }

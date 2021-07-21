import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path: 'inicio', component:ServiciosComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'quienes-somos/:integrante', component: IntegranteComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}



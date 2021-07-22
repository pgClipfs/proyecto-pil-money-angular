import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptomonedaComponent } from './pages/criptomoneda/criptomoneda.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { IntegranteComponent } from './pages/integrante/integrante.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TransaccionesComponent } from './pages/transacciones/transacciones.component';

const routes: Routes = [
  {path: 'iniciar-sesion', component: IniciarSesionComponent,
    children: [
      {path:'operaciones', component: OperacionesComponent},
      {path:'transacciones', component: TransaccionesComponent},
      {path:'criptomoneda', component: CriptomonedaComponent},
    ]
  },
  {path:'servicios', component: ServiciosComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'quienes-somos/:id', component: IntegranteComponent},
  {path: 'registro', component:RegistroComponent},
  {path: '', redirectTo: '/servicios', pathMatch: 'full'},
  {path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}



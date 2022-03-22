import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';

//Definir rutas:
const routes: Routes = [
  // ruta por defecto
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', component: Pagina404ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

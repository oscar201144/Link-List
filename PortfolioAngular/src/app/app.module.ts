import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos los modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentepruebaComponent } from './componentes/componenteprueba/componenteprueba.component';
import { Pagina404ComponentComponent } from './pagina404-component/pagina404-component.component';

// En este componente crearemos el formulario login
 import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentepruebaComponent,
    Pagina404ComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

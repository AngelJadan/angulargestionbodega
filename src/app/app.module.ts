import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';

import { HttpClientModule } from '@angular/common/http';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DatosComponent } from './components/usuario/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PedidoComponent,
    AdministradorComponent,
    ClienteComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

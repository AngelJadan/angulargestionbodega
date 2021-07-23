import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { PedidoComponent } from './components/pedido/pedido/pedido.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DatosComponent } from './components/cliente/datos/datos.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent},
  { path: 'pedido/:nombre', component: PedidoComponent},
  { path: 'administrador/:nombre', component:AdministradorComponent},
  { path: 'cliente/:nombre', component:ClienteComponent},
  { path: 'cliente_datos/:nombre', component:DatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

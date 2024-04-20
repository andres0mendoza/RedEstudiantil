import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent},
  { path:'login', component: LoginComponent},
  { path:'registrarUsuario', component: RegistrarUsuarioComponent},
  { path:'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', pathMatch:'full' , redirectTo:'login'},
  { path: 'login', component: LoginComponent , title:'Inicio de sesión'},
  { path:'inicio', component: InicioComponent, title:'Inicio'},
  { path:'registrarUsuario', component: RegistrarUsuarioComponent, title:'Registro usuario'},
  { path:'perfil', component: PerfilComponent, title:'Perfil'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

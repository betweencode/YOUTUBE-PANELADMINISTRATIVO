import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoPrincipalComponent } from './layout/private/contenido-principal/contenido-principal.component';
import { MenuComponent } from './layout/private/menu/menu.component';
import { FooterComponent } from './layout/private/footer/footer.component';
import { HeaderComponent } from './layout/private/header/header.component';
import { AccesopublicoComponent } from './layout/public/accesopublico/accesopublico.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoPrincipalComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    AccesopublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './pages/roles/roles.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';



@NgModule({
  declarations: [
    RolesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,AdministracionRoutingModule
  ]
})
export class AdministracionModule { }

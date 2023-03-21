import { PerfilRoutingModule } from './perfil-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './pages/perfil/perfil.component';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,PerfilRoutingModule
  ]
})
export class PerfilModule { }

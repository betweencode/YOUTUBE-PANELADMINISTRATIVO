import { PerfilComponent } from './pages/perfil/perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const rutas:Routes=[
  {path:'',children:[
    {path:'perfil',component:PerfilComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[RouterModule]
})
export class PerfilRoutingModule { }

import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const rutas:Routes = [
  {path:'',children:[
    {path:'roles',component:RolesComponent},
    {path:'usuarios',component:UsuariosComponent},
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[RouterModule]
})
export class AdministracionRoutingModule { }

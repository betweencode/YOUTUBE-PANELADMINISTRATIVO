import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './pages/registro/registro.component';


const rutas:Routes = [
  {path:'',children:[
    {path:'login',component:LoginComponent},
    {path:'registro',component:RegistroComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[RouterModule]
})
export class LoginRoutingModule { }

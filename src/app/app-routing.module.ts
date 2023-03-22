import { AccesopublicoComponent } from './layout/public/accesopublico/accesopublico.component';
import { ContenidoPrincipalComponent } from './layout/private/contenido-principal/contenido-principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'principal',component:ContenidoPrincipalComponent,loadChildren:()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'administracion',component:ContenidoPrincipalComponent,loadChildren:()=>import('./modules/administracion/administracion.module').then(m=>m.AdministracionModule)},
  {path:'usuario',component:ContenidoPrincipalComponent,loadChildren:()=>import('./modules/perfil/perfil.module').then(m=>m.PerfilModule)},
  {path:'sesion',component:AccesopublicoComponent,loadChildren:()=>import('./modules/login/login.module').then(m => m.LoginModule)},
  {pathMatch:"full",path:'**',redirectTo:'/principal/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

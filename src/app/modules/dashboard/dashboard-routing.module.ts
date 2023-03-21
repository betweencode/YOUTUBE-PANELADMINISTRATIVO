import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas:Routes = [
  {path:'',children:[{
    path:'dashboard',component:DashboardComponent
  }]}
];

@NgModule({
  imports:[RouterModule.forChild(rutas)],
  exports:[RouterModule]
})
export class DashboardRoutingModule{

}

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
   declarations:[
    DashboardComponent
  ],
   imports:[CommonModule,FormsModule,ReactiveFormsModule,DashboardRoutingModule],
   exports:[]
})
export class DashboardModule{

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailsComponent} from './hero-details/hero-details.component'
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {ProudctComponent} from './proudct/proudct.component'; 
import {ProductDetailsComponent} from './product-details/product-details.component'

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'employee', component:EmployeeComponent},
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'heroes', component : HerosComponent},
  {path: 'details/:Id', component : HeroDetailsComponent},
  {path: 'product', component : ProudctComponent},
  {path: 'productList', component : ProductDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

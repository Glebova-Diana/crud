import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {DepartmentNewComponent} from './department-new/department-new.component';
import {EmployeeNewComponent} from './employee-new/employee-new.component';
import {DepartmentComponent} from './department-list/department/department.component';
import {EmployeeComponent} from './employee-list/employee/employee.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'department',
  },
  {
    path: 'department', component: DepartmentListComponent
  },
  {
    path: 'employee', component: EmployeeListComponent
  },
  {
    path: 'department-new', component: DepartmentNewComponent
  },
  {
    path: 'employee-new', component: EmployeeNewComponent
  },
  {
    path: 'department/:id', component: DepartmentComponent
  },
  {
    path: 'employee/:id', component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

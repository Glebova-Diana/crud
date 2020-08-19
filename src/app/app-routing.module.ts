import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentComponent} from './department/department.component';
import {EmployeeComponent} from './employee/employee.component';
import {DepartmentNewComponent} from './department-new/department-new.component';
import {EmployeeNewComponent} from './employee-new/employee-new.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'department',
  },
  {
    path: 'department', component: DepartmentComponent
  },
  {
    path: 'employee', component: EmployeeComponent
  },
  {
    path: 'department-new', component: DepartmentNewComponent
  },
  {
    path: 'employee-new', component: EmployeeNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

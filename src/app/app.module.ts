import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeBackendService} from './services/fake-backend.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DepartmentNewComponent } from './department-new/department-new.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DepartmentComponent } from './department-list/department/department.component';
import { EmployeeComponent } from './employee-list/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    HeaderComponent,
    EmployeeListComponent,
    DepartmentNewComponent,
    EmployeeNewComponent,
    DepartmentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

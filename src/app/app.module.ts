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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

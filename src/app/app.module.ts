import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsModule } from "./items/items.module";
import { MaterialModule } from "./shared/material/material.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginModule } from "./login/login.module";
import { AppDeactivateGuard } from "./appDeactivate.guard";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ItemsModule,
    MaterialModule,
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers: [AppDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

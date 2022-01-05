import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from "../shared/material/material.module";

@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ]
})
export class DashboardModule { }

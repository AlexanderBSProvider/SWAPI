import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from "../shared/material/material.module";
import { ItemInfoComponent } from './item-info/item-info.component';


@NgModule({
  declarations: [
    MainComponent,
    CategoriesComponent,
    ItemInfoComponent
  ],
  exports: [
    MainComponent,
    CategoriesComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }

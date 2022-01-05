import { NgModule } from '@angular/core';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRippleModule } from "@angular/material/core";


@NgModule({
  exports: [
    MatPaginatorModule,
    MatRippleModule
  ]
})
export class MaterialModule { }

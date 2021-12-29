import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { ItemInfoComponent } from './item-info/item-info.component';
import {RouterModule} from "@angular/router";
import {ItemsRoutingModule} from "./items-routing.module";
import {MainComponent} from "../dashboard/main/main.component";
import {CategoriesComponent} from "../dashboard/categories/categories.component";
import {MaterialModule} from "../shared/material/material.module";
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    // ItemInfoComponent

    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    StarshipsComponent,
    VehiclesComponent,
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    // ItemInfoComponent,
    MaterialModule,
    MatCardModule,
    MatRippleModule
  ],
})

export class ItemsModule { }

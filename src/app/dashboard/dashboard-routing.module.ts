import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ItemInfoComponent} from "./item-info/item-info.component";
import {FilmsComponent} from "../items/films/films.component";
import {PeopleComponent} from "../items/people/people.component";
import {PlanetsComponent} from "../items/planets/planets.component";
import {StarshipsComponent} from "../items/starships/starships.component";
import {VehiclesComponent} from "../items/vehicles/vehicles.component";
import {SpeciesComponent} from "../items/species/species.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'categories/:categoryName',
    component: CategoriesComponent,
  },
  {
    path: 'categories/films/:itemId',
    component: FilmsComponent
  },
  {
    path: 'categories/people/:itemId',
    component: PeopleComponent
  },
  {
    path: 'categories/planets/:itemId',
    component: PlanetsComponent
  },
  {
    path: 'categories/starships/:itemId',
    component: StarshipsComponent
  },
  {
    path: 'categories/vehicles/:itemId',
    component: VehiclesComponent
  },
  {
    path: 'categories/species/:itemId',
    component: SpeciesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

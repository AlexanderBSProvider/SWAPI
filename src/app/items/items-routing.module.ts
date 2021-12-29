import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FilmsComponent} from "./films/films.component";
import {PlanetsComponent} from "./planets/planets.component";

// import { MainComponent } from "./main/main.component";
// import { CategoriesComponent } from "./categories/categories.component";
// import { ItemInfoComponent} from "./item-info/item-info.component";

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainComponent,
  // },
  // {
  //   path: 'categories/:categoryName',
  //   component: CategoriesComponent,
  // },
  // {
  //   path: 'categories/planets/:itemId',
  //   component: PlanetsComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}

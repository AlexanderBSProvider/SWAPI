import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./dashboard/categories/categories.component";
import {AppDeactivateGuard} from "./appDeactivate.guard";
import {AppActivateGuard} from "./appActivate.guard";

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m: any) => m.LoginModule),
    canDeactivate: [AppDeactivateGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m: any) => m.DashboardModule),
    canActivate: [AppActivateGuard]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AppDeactivateGuard, AppActivateGuard]
})
export class AppRoutingModule { }

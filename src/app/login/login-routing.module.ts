import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login.component";
import { AppDeactivateGuard } from "../appDeactivate.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canDeactivate: [AppDeactivateGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [AppDeactivateGuard],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

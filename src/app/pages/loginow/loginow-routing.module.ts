import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginowPage } from './loginow.page';

const routes: Routes = [
  {
    path: '',
    component: LoginowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginowPageRoutingModule {}

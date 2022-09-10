import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantfabPage } from './pantfab.page';

const routes: Routes = [
  {
    path: '',
    component: PantfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantfabPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatfabPage } from './coatfab.page';

const routes: Routes = [
  {
    path: '',
    component: CoatfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatfabPageRoutingModule {}

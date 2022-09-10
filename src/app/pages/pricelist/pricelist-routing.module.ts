import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricelistPage } from './pricelist.page';

const routes: Routes = [
  {
    path: '',
    component: PricelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricelistPageRoutingModule {}

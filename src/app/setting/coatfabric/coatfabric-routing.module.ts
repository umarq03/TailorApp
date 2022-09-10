import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatfabricPage } from './coatfabric.page';

const routes: Routes = [
  {
    path: '',
    component: CoatfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatfabricPageRoutingModule {}

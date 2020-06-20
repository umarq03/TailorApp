import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantfabricPage } from './pantfabric.page';

const routes: Routes = [
  {
    path: '',
    component: PantfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantfabricPageRoutingModule {}

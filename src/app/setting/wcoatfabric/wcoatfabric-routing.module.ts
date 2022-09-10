import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcoatfabricPage } from './wcoatfabric.page';

const routes: Routes = [
  {
    path: '',
    component: WcoatfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcoatfabricPageRoutingModule {}

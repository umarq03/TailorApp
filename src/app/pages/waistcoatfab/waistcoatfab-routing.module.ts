import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaistcoatfabPage } from './waistcoatfab.page';

const routes: Routes = [
  {
    path: '',
    component: WaistcoatfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaistcoatfabPageRoutingModule {}

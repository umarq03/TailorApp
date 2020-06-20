import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaistcoatdesignsPage } from './waistcoatdesigns.page';

const routes: Routes = [
  {
    path: '',
    component: WaistcoatdesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaistcoatdesignsPageRoutingModule {}

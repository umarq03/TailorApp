import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtdesignsPage } from './shirtdesigns.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtdesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtdesignsPageRoutingModule {}

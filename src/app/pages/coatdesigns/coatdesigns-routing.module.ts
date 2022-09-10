import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatdesignsPage } from './coatdesigns.page';

const routes: Routes = [
  {
    path: '',
    component: CoatdesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatdesignsPageRoutingModule {}

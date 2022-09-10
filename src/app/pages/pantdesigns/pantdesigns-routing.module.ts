import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantdesignsPage } from './pantdesigns.page';

const routes: Routes = [
  {
    path: '',
    component: PantdesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantdesignsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KameezdesignsPage } from './kameezdesigns.page';

const routes: Routes = [
  {
    path: '',
    component: KameezdesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KameezdesignsPageRoutingModule {}

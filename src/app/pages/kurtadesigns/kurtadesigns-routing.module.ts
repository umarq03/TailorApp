import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurtadesignsPage } from './kurtadesigns.page';

const routes: Routes = [
  {
    path: '',
    component: KurtadesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurtadesignsPageRoutingModule {}

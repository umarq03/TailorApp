import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddesignPage } from './addesign.page';

const routes: Routes = [
  {
    path: '',
    component: AddesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddesignPageRoutingModule {}

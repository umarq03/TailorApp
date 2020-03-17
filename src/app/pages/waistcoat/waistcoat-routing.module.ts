import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaistcoatPage } from './waistcoat.page';

const routes: Routes = [
  {
    path: '',
    component: WaistcoatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaistcoatPageRoutingModule {}

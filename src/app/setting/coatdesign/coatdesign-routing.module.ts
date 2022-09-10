import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatdesignPage } from './coatdesign.page';

const routes: Routes = [
  {
    path: '',
    component: CoatdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatdesignPageRoutingModule {}

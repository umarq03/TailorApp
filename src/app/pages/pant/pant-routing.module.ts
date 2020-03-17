import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantPage } from './pant.page';

const routes: Routes = [
  {
    path: '',
    component: PantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtdesignPage } from './shirtdesign.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtdesignPageRoutingModule {}

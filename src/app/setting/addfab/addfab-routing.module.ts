import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddfabPage } from './addfab.page';

const routes: Routes = [
  {
    path: '',
    component: AddfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddfabPageRoutingModule {}

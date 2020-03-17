import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricsPage } from './fabrics.page';

const routes: Routes = [
  {
    path: '',
    component: FabricsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricsPageRoutingModule {}

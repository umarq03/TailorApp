import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantdesignPage } from './pantdesign.page';

const routes: Routes = [
  {
    path: '',
    component: PantdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantdesignPageRoutingModule {}

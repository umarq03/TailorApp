import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcoatdatabasePage } from './wcoatdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: WcoatdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcoatdatabasePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatdatabasePage } from './coatdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: CoatdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatdatabasePageRoutingModule {}

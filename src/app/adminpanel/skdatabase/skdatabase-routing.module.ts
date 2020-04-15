import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkdatabasePage } from './skdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: SkdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkdatabasePageRoutingModule {}

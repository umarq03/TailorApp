import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkfabPage } from './skfab.page';

const routes: Routes = [
  {
    path: '',
    component: SkfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkfabPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtfabPage } from './shirtfab.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtfabPageRoutingModule {}

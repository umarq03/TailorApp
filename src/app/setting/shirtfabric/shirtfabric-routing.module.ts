import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtfabricPage } from './shirtfabric.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtfabricPageRoutingModule {}

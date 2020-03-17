import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SKameezPage } from './skameez.page';

const routes: Routes = [
  {
    path: '',
    component: SKameezPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SKameezPageRoutingModule {}

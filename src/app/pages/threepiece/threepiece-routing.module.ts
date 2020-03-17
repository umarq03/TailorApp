import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreepiecePage } from './threepiece.page';

const routes: Routes = [
  {
    path: '',
    component: ThreepiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreepiecePageRoutingModule {}

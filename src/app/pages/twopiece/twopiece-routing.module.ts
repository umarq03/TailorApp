import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwopiecePage } from './twopiece.page';

const routes: Routes = [
  {
    path: '',
    component: TwopiecePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwopiecePageRoutingModule {}

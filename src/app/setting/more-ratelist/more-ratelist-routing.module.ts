import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreRatelistPage } from './more-ratelist.page';

const routes: Routes = [
  {
    path: '',
    component: MoreRatelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreRatelistPageRoutingModule {}

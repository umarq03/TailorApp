import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurtadatabasePage } from './kurtadatabase.page';

const routes: Routes = [
  {
    path: '',
    component: KurtadatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurtadatabasePageRoutingModule {}

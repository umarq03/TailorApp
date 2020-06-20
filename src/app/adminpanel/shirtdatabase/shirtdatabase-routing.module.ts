import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtdatabasePage } from './shirtdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: ShirtdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtdatabasePageRoutingModule {}

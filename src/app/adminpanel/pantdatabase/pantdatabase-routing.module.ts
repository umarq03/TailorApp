import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantdatabasePage } from './pantdatabase.page';

const routes: Routes = [
  {
    path: '',
    component: PantdatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantdatabasePageRoutingModule {}

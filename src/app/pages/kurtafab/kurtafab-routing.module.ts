import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurtafabPage } from './kurtafab.page';

const routes: Routes = [
  {
    path: '',
    component: KurtafabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurtafabPageRoutingModule {}

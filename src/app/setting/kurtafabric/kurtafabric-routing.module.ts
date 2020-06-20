import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurtafabricPage } from './kurtafabric.page';

const routes: Routes = [
  {
    path: '',
    component: KurtafabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurtafabricPageRoutingModule {}

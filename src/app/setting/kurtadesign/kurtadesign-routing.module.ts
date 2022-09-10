import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurtadesignPage } from './kurtadesign.page';

const routes: Routes = [
  {
    path: '',
    component: KurtadesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurtadesignPageRoutingModule {}

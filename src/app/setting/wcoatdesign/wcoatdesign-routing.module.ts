import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WcoatdesignPage } from './wcoatdesign.page';

const routes: Routes = [
  {
    path: '',
    component: WcoatdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WcoatdesignPageRoutingModule {}

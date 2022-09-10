import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkdesignPage } from './skdesign.page';

const routes: Routes = [
  {
    path: '',
    component: SkdesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkdesignPageRoutingModule {}

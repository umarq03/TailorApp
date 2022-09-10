import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditcoatfabricPage } from './editcoatfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditcoatfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditcoatfabricPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditwcoatfabricPage } from './editwcoatfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditwcoatfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditwcoatfabricPageRoutingModule {}

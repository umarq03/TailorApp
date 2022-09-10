import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditfabricPage } from './editfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditfabricPageRoutingModule {}

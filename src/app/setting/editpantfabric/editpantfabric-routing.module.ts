import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpantfabricPage } from './editpantfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditpantfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpantfabricPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditshirtfabricPage } from './editshirtfabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditshirtfabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditshirtfabricPageRoutingModule {}

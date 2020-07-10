import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditkurtafabricPage } from './editkurtafabric.page';

const routes: Routes = [
  {
    path: '',
    component: EditkurtafabricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditkurtafabricPageRoutingModule {}

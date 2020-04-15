import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDatabasePage } from './admin-database.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDatabasePageRoutingModule {}

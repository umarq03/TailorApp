import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterSettingPage } from './starter-setting.page';

const routes: Routes = [
  {
    path: '',
    component: StarterSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterSettingPageRoutingModule {}

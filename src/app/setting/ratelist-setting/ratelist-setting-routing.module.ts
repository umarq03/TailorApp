import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatelistSettingPage } from './ratelist-setting.page';

const routes: Routes = [
  {
    path: '',
    component: RatelistSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatelistSettingPageRoutingModule {}

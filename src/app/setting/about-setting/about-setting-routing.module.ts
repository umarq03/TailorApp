import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSettingPage } from './about-setting.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSettingPageRoutingModule {}

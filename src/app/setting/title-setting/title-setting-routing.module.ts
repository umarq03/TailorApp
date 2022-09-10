import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleSettingPage } from './title-setting.page';

const routes: Routes = [
  {
    path: '',
    component: TitleSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitleSettingPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitleSettingPageRoutingModule } from './title-setting-routing.module';

import { TitleSettingPage } from './title-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitleSettingPageRoutingModule
  ],
  declarations: [TitleSettingPage]
})
export class TitleSettingPageModule {}

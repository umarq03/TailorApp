import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatelistSettingPageRoutingModule } from './ratelist-setting-routing.module';

import { RatelistSettingPage } from './ratelist-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatelistSettingPageRoutingModule
  ],
  declarations: [RatelistSettingPage]
})
export class RatelistSettingPageModule {}

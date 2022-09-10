import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarterSettingPageRoutingModule } from './starter-setting-routing.module';

import { StarterSettingPage } from './starter-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarterSettingPageRoutingModule
  ],
  declarations: [StarterSettingPage]
})
export class StarterSettingPageModule {}

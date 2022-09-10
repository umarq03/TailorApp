import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSettingPageRoutingModule } from './about-setting-routing.module';

import { AboutSettingPage } from './about-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSettingPageRoutingModule
  ],
  declarations: [AboutSettingPage]
})
export class AboutSettingPageModule {}

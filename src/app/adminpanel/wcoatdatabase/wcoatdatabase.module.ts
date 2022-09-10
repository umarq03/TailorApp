import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WcoatdatabasePageRoutingModule } from './wcoatdatabase-routing.module';

import { WcoatdatabasePage } from './wcoatdatabase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WcoatdatabasePageRoutingModule
  ],
  declarations: [WcoatdatabasePage],
  entryComponents: [WcoatdatabasePage]

})
export class WcoatdatabasePageModule {}

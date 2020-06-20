import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PantdatabasePage } from './pantdatabase.page';
import { PantdatabasePageRoutingModule } from './pantdatabase-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantdatabasePageRoutingModule

  ],
  declarations: [PantdatabasePage],
  entryComponents: [PantdatabasePage]
})
export class PantdatabasePageModule {}

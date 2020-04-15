import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDatabasePageRoutingModule } from './admin-database-routing.module';

import { AdminDatabasePage } from './admin-database.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { Router, RouterModule } from '@angular/router';
import { SkdatabasePageModule } from '../skdatabase/skdatabase.module';
import { PantdatabasePageModule } from '../pantdatabase/pantdatabase.module';
import { ShirtdatabasePageModule } from '../shirtdatabase/shirtdatabase.module';
import { KurtadatabasePageModule } from '../kurtadatabase/kurtadatabase.module';
import { CoatdatabasePageModule } from '../coatdatabase/coatdatabase.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDatabasePageRoutingModule,
    RouterModule.forChild([
      {
        path:'',
        component: AdminDatabasePage
      }
    ]),
    SuperTabsModule,
    SkdatabasePageModule,
    PantdatabasePageModule,
    ShirtdatabasePageModule,
    KurtadatabasePageModule,
    CoatdatabasePageModule
  ],
  declarations: [AdminDatabasePage]
})
export class AdminDatabasePageModule {}

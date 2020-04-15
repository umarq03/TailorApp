import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverComponent } from './popover/popover.component';
import { SkfabPageModule } from './pages/skfab/skfab.module';
import { SKameezPageModule } from './pages/skameez/skameez.module';
import { CoatPageModule } from './pages/coat/coat.module';
import { DesignsPageModule } from './pages/designs/designs.module';
import { MenuComponent } from './menu/menu.component';
import { MainHomePageModule } from './pages/main-home/main-home.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import {AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import {SuperTabsModule} from '@ionic-super-tabs/angular'
import {Network} from '@ionic-native/network/ngx';



@NgModule({
  declarations: [AppComponent, PopoverComponent, MenuComponent],
  entryComponents: [PopoverComponent, MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SkfabPageModule,
    SKameezPageModule,
    CoatPageModule,
    DesignsPageModule,
    MainHomePageModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    SuperTabsModule.forRoot()
   

    
    
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NavParams,
    Network,
    
    
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

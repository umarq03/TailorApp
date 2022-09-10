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
import { SkfabPageModule } from './pages/skfab/skfab.module';
import { SKameezPageModule } from './pages/skameez/skameez.module';
import { CoatPageModule } from './pages/coat/coat.module';
import { DesignsPageModule } from './pages/designs/designs.module';
import { MainHomePageModule } from './pages/main-home/main-home.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import {AngularFireStorageModule, AngularFireStorage} from '@angular/fire/storage';
import {SuperTabsModule} from '@ionic-super-tabs/angular'
import {Network} from '@ionic-native/network/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { SKameezPage } from './pages/skameez/skameez.page';
import { SMS } from '@ionic-native/sms/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { AboutPageModule } from './pages/about/about.module';
import { SkdatabasePage } from './adminpanel/skdatabase/skdatabase.page';
import { SkdatabasePageModule } from './adminpanel/skdatabase/skdatabase.module';
import { Chooser } from '@ionic-native/chooser/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
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
    SuperTabsModule.forRoot(),
    AboutPageModule,
    SkdatabasePageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NavParams,
    Network,
    EmailComposer,
    SocialSharing,
    Camera,
    SMS,
    Badge,
    AndroidPermissions,
    Dialogs,
    SkdatabasePage,
    Chooser,
    FileChooser,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
// import firebaseConfig from './firebase';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {from} from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
// import { ToastController, NavController, MenuController} from '@ionic/angular';
import { Platform, NavController, MenuController, ToastController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { ImageModalPageModule } from './pages/image-modal/image-modal.module';
import { SkfabPageModule } from './pages/skfab/skfab.module';







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
    ImageModalPageModule,
    // SkfabPageModule
    
    
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // SkfabPageModule
    // AccessProviders,
    // ServiceproviderService,
    
    
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Platform, NavController, MenuController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuthModule } from '@angular/fire/auth';
// import {MainHomePage} from './pages/main-home/main-home.page'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  allet: any;
  // rootPage: any = MainHomePage;
 
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Storage: Storage,
    public navctrl: NavController,
    private router: Router,
    public asAuth: AngularFireAuth,
    private auth: AngularFireAuthModule,
    private menu: MenuController,
    private toast: ToastController

  ) {

    this.initializeApp();
  
    // this.menu.enable(false, 'first');
    // this.menu.open('first');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

 
  // openFirst() {
  //   this.menu.enable(false, 'first');
  //   this.menu.open('first');
  // }
  // signout() {
  //   this.asAuth.auth.signOut();
  //   this.AllertAll("Signed Out Successfully", "");
  //   this.router.navigate(['/home']);
  // }
  // async AllertAll(header: string, message: string) {

  //   this.allet = await this.toast.create({

  //     header: header,
  //     message: message,
  //     // buttons: ['ok']
  //     duration: 3000
  //   })
  //   await this.allet.present();
  // }

}

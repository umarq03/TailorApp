import { Component, OnInit } from '@angular/core';
import { Platform, NavController, MenuController, ToastController,LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MainHomePage } from './pages/main-home/main-home.page';
import { HomePage } from './pages/home/home.page';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  allet: any;
  rootPage: any;
  isAuthenticated: boolean = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Storage: Storage,
    public navctrl: NavController,
    private router: Router,
    public asAuth: AngularFireAuth,
    private menu: MenuController,
    private toast: ToastController,
    private loadingCtrl: LoadingController

  ) {

    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.asAuth.authState.subscribe(user => {

      //   if (user) {
      //     this.isAuthenticated = true;
      //     this.router.navigateByUrl('/main-home');
      //     this.rootPage = MainHomePage;
      //   } else {
      //     this.isAuthenticated = false;
      //     this.router.navigateByUrl('/home');
      //     this.rootPage = HomePage
      //   }
      // });
    });
  }

  async logOut() {
    const loading = await this.presentLoading();
    this.asAuth.auth.signOut();
    this.AllertAll("Signed Out Successfully", "");
    this.loadingCtrl.dismiss();  
    this.router.navigate(['/home']);
  }
  async AllertAll(header: string, message: string) {
    this.allet = await this.toast.create({
      header: header,
      message: message,
      // buttons: ['ok']
      duration: 3000
    })
    await this.allet.present();
  }

  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Signing you out, Please Wait'
    });
    return await loading.present();
  }

}

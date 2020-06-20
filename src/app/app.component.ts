import { Component, OnInit } from '@angular/core';
import { Platform, NavController, MenuController, ToastController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MainHomePage } from './pages/main-home/main-home.page';
import { HomePage } from './pages/home/home.page';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Badge } from '@ionic-native/badge/ngx';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  navigate: any;
  allet: any;
  rootPage: any;
  isAuthenticated: boolean = false;
  userEmail: string;

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
    private loadingCtrl: LoadingController,
    private network: Network,
    private socialSharing: SocialSharing,
    private badge: Badge,
    private navCtrl: NavController,
    private authservice: AuthServiceService
  ) {

    this.initializeApp();
    this.menu.enable(true, "first");
    this.menu.open("first");

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
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

      // this.badge.set(15);
      // this.badge.increase(1);
      // this.badge.clear();
    });
  }

  ngOnInit() {
    // this.authservice.userDetails().subscribe(res => {
    //   if (res !== null) {
    //     this.userEmail = res.email;
    //     this.navCtrl.navigateForward('/main-home');
    //   } else {
    //     this.navCtrl.navigateBack('/home');
    //   }
    // })
  }

  gotosetting() {
    this.router.navigateByUrl('/main-setting');
  }


  // async logOut() {
  //   const loading = await this.presentLoading();
  //   this.asAuth.auth.signOut().then(() => {
  //     this.AllertAll('SignedOut Successfully', '')
  //     this.navCtrl.navigateForward('/home');
  //   });

  //   this.loadingCtrl.dismiss();
  // }

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
      message: 'Signing you out, Please Wait',
      duration: 1000
    });
    return await loading.present();
  }

  help() {
    this.router.navigateByUrl('/help');
  }
  sendShare() {
    var options = {
      message: 'App Share',
      url: 'https://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }
  aboutPage() {
    this.router.navigateByUrl('/about');
  }

}

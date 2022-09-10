import { Component, OnInit} from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import { MenuController, IonTabs } from '@ionic/angular';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { ToastButton } from '@ionic/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private starterSetting: Observable<starterSetting[]>;
  searching: boolean = true;

  constructor(private router: Router, private menu: MenuController,
    private database: DatabaseService,
     private loadingCtrl: LoadingController,
     private androidPermissions: AndroidPermissions,
     private sms: SMS,
     private toastCtrl: ToastController) { 

    this.menu.swipeGesture(false);
    
  }
  


  ngOnInit() {
    this.starterSetting = this.database.getStarterSettings();
    this.starterSetting.subscribe(()=> this.searching = false);
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: 'danger'
    }).then(toast => toast.present());
  }
  checkSMSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS)
    );
  }
  requestSMSPermission() {
    // tslint:disable-next-line: max-line-length
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.BROADCAST_SMS]);
  }

  navigatetologin(){
    this.checkSMSPermission();
    const options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: ''  // send SMS with the native android SMS messaging
        // intent: '' // send SMS without opening any other app
      }
    };
    this.sms.send('03018761467','Someone enter the Tailorshop App!', options).then(() => {

    })
      .catch(error => {
        this.showToast('Errorfailed: ' + error);
      });
    this.router.navigate(['/login']);
  }
 
  

 

}

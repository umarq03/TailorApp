import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting, rateList, aboutSetting } from 'src/app/services/database.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-main-setting',
  templateUrl: './main-setting.page.html',
  styleUrls: ['./main-setting.page.scss'],
})
export class MainSettingPage implements OnInit {
  private titleSetting: Observable<titleSetting[]>;
  private starterSetting: Observable<starterSetting[]>;
  private emailSetting: Observable<emailSetting[]>;
  private rateList: Observable<rateList[]>;
  private aboutSetting: Observable<aboutSetting[]>;

  constructor(private database: DatabaseService, private loadingCtrl: LoadingController,
    private network: Network, private toastCtrl: ToastController, private router: Router,
    private androidPermissions: AndroidPermissions, private sms: SMS
   ) {
     }

     ionViewDidEnter(){
       this.loadData2();
     }
  
  ngOnInit() {
    this.titleSetting = this.database.getTitleSettings();
    this.starterSetting = this.database.getStarterSettings();
    this.emailSetting = this.database.getEmailSettings();
    this.rateList = this.database.getRateLists();
    this.aboutSetting =  this.database.getAboutSettings();
  }
  async loadData2() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading...',
    });
    await loading.present().then(() =>{
      this.aboutSetting.subscribe();
    });
    {
      loading.dismiss()
    }
  }
  addfabrics(){
    this.router.navigateByUrl('addfab');
  }
  adddesigns(){
    this.router.navigateByUrl('addesign');
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

  Sms(){
      this.checkSMSPermission();
      const options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
          intent: ''  // send SMS with the native android SMS messaging
          // intent: '' // send SMS without opening any other app
        }
      };
      this.sms.send('03018761467','You just test the android permission!', options).then(() => {
  
      })
        .catch(error => {
          this.showToast('Errorfailed: ' + error);
        });
    }
  

}

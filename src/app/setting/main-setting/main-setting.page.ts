import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting, rateList, aboutSetting } from 'src/app/services/database.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
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
    private network: Network, private toastCtrl: ToastController, private router: Router) {
      this.network.onDisconnect().subscribe(()=>{
        this.showToast('Network was disconnected!')
      });
      
      this.network.onConnect().subscribe(()=>{
  
        setTimeout(() => {
          this.showToast('You got a '+''+this.network.type+'connection, woooho!');
        });
      });
     }
     showToast(msg) {
      this.toastCtrl.create({
        message: msg,
        duration: 2000
      }).then(toast => toast.present());
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
      duration: 1000
    });
    await loading.present();
    {
    }
  }
  addfabrics(){
    this.router.navigateByUrl('addfab');
  }

}

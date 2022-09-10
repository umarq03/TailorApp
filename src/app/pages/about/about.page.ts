import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ToastController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting, rateList, aboutSetting, Idea } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SkdatabasePage } from 'src/app/adminpanel/skdatabase/skdatabase.page';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  private aboutSetting: Observable<aboutSetting[]>;
  items = [];
  searching: boolean = true;

  constructor(private network: Network, private toastCtrl: ToastController,
    private database: DatabaseService, private loadingCtrl: LoadingController, private activaterouter: ActivatedRoute,
    private navparam: NavParams, private about: SkdatabasePage) {

  }
  ionViewWillEnter() {
    this.aboutSetting.subscribe(() => this.searching = false);
  }

  ngOnInit() {
    this.aboutSetting = this.database.getAboutSettings();

  }
  
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  

}

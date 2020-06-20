import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { ToastController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting, rateList, aboutSetting,Idea } from 'src/app/services/database.service';
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
  private  skdata: Observable<Idea[]>;
  items = [];

  navigateItem : string[] = [];
  private fullname;
  constructor(private network: Network, private toastCtrl: ToastController,
    private database: DatabaseService, private loadingCtrl: LoadingController,private activaterouter: ActivatedRoute,
    private navparam: NavParams, private about: SkdatabasePage) { 
    this.network.onDisconnect().subscribe(()=>{
      this.showToast('Network was disconnected!')
    });
    
    this.network.onConnect().subscribe(()=>{

      setTimeout(() => {
        this.showToast('You got a '+''+this.network.type+'connection, woooho!');
      });
    });

  }
  ionViewWillEnter(){
    
    this.loaddata();
  }

  // ionViewWllLoad(){
  //   this.name = this.navparam.data.paramName; 
  // }

  ngOnInit() {
    this.aboutSetting =  this.database.getAboutSettings();
    this.skdata = this.database.getIdeas();
    // this.name = this.navparam.data.paramName; 
    this.items = this.about.getCart();
    // this.fullname = this.navparam.get('fullname')
    this.fullname = this.activaterouter.snapshot.paramMap.get('fullname');


  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  async loaddata(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading...',
      duration: 1000
    });
    await loading.present();
  }


}

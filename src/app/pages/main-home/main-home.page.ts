import { Component, OnInit, OnDestroy} from '@angular/core';
import { ToastController, MenuController, NavController } from '@ionic/angular';
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit ,OnDestroy{
 networkStatus: NetworkStatus;
 networkListener: PluginListenerHandle;
 private titleSetting: Observable<titleSetting[]>;
 userEmail: string;

  constructor(private toastCtrl: ToastController, private menu: MenuController,
    private database: DatabaseService, private loadingCtrl: LoadingController,
    private authservice: AuthServiceService, private navCtrl: NavController) {   
   this.menu.swipeGesture(true);
 }

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network Status Changed!',status);
      this.networkStatus = status;
    },
    );
    this.networkStatus = await Network.getStatus();
    this.titleSetting = this.database.getTitleSettings();
  }

  // ionViewWillEnter(){
  //   this.loaddata();
  // }
  ionViewDidLoad(){
    this.loaddata()
  }

  ngOnDestroy(): void{
    this.networkListener.remove();
  }
  async loaddata(){
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: ''
    });
    await loading.present();
    loading.dismiss();
  }
 


}

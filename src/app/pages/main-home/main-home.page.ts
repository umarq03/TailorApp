import { Component, OnInit, OnDestroy} from '@angular/core';
import { ToastController, MenuController, NavController, PopoverController } from '@ionic/angular';
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PopoverComponent } from 'src/app/popover/popover.component';

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
 searching: boolean = true;
 allet: any;

  constructor(private toastCtrl: ToastController, private menu: MenuController,
    private database: DatabaseService, private loadingCtrl: LoadingController,
    private authservice: AuthServiceService, private navCtrl: NavController,
    public asAuth: AngularFireAuth, private router: Router,public popover: PopoverController
    ) {   
 }

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network Status Changed!',status);
      this.networkStatus = status;
    },
    );
    this.networkStatus = await Network.getStatus();
    this.titleSetting = this.database.getTitleSettings();
    this.titleSetting.subscribe(()=> this.searching = false);
  }

  ngOnDestroy(): void{
    this.networkListener.remove();
  }
  async presentPopover(ev: any) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
    
  }
}




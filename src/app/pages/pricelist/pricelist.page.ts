import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, Platform, AlertController } from '@ionic/angular';
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting , rateList, morerateList} from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.page.html',
  styleUrls: ['./pricelist.page.scss'],
})


export class PricelistPage implements OnInit , OnDestroy{
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  private rateList: Observable<rateList[]>;
  private moreratelist: Observable<morerateList[]>;
  searching: boolean = true;

  constructor(private menu: MenuController,
    private platform: Platform, private alertController: AlertController,
    private database: DatabaseService,
     private loadingCtrl: LoadingController) {
      this.menu.swipeGesture(true);
   

  }
 

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network Status Changed!',status);
      this.networkStatus = status;
    },
    );
    this.networkStatus = await Network.getStatus();
    this.rateList = this.database.getRateLists();
    this.moreratelist = this.database.getMoreRateLists();
    this.rateList.subscribe(()=> this.searching = false);

  }

  ngOnDestroy(): void{
    this.networkListener.remove();
  }

}



import { Component, OnInit,OnDestroy } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular'
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy {
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  constructor( private menu: MenuController, private popoverCtrl: PopoverController) { 

    this.menu.swipeGesture(true);
  }
 
  

  async ngOnInit() {
    this.networkListener = Network.addListener('networkStatusChange', status => {
      console.log('Network Status Changed!',status);
      this.networkStatus = status;
    },
    );
    this.networkStatus = await Network.getStatus();
   
  }

  ngOnDestroy(): void{
    this.networkListener.remove();
  }

 

}

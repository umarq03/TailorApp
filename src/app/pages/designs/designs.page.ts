import { Component, OnInit , OnDestroy} from '@angular/core';
import { MenuController, PopoverController, NavParams } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { ActivatedRoute } from '@angular/router';
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;

@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
})
export class DesignsPage implements OnInit, OnDestroy {
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
 
  constructor( private menu: MenuController,private popoverCtrl: PopoverController, 
    private navparam: NavParams, public activeRoute: ActivatedRoute) { 

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

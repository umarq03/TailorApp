import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController, LoadingController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';
import {Plugins, PluginListenerHandle, NetworkStatus} from '@capacitor/core' 
const { Network } = Plugins;
@Component({
  selector: 'app-fabrics',
  templateUrl: './fabrics.page.html',
  styleUrls: ['./fabrics.page.scss'],
})
export class FabricsPage implements OnInit {

  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  
  sliderOpts = {

    zoom: {maxRatio:3},
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true

  };

  constructor( private menu: MenuController,private popoverCtrl: PopoverController, private router: Router,
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
   
  }
  ionViewWillEnter(){
    this.loaddata();
  }

  ngOnDestroy(): void{
    this.networkListener.remove();
  }
  skfab(){
    this.router.navigate(['/skfab']);
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

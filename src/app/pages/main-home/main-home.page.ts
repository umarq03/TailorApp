import { Component, OnInit } from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {

 

  constructor(public network: Network, private toastCtrl: ToastController) {   
    this.network.onDisconnect().subscribe(() =>{
      this.showToast('NetWork is Disconnected, Sorry!')
    });
    
    this.network.onConnect().subscribe(() =>{
      
      this.showToast('NetWork is Connected, Enjoy'!)


    });
 }

  ngOnInit() {
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-pantdesigns',
  templateUrl: './pantdesigns.page.html',
  styleUrls: ['./pantdesigns.page.scss'],
})
export class PantdesignsPage implements OnInit {
pantdesigns = [];
  constructor(private router: Router, private cartService: CartService, private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.pantdesigns = this.cartService.getProduct();

  }
  selectFabric(product){

    this.cartService.addpantdesigns(product);
    this.loadData();
    this.router.navigate(['/pant']);
    this.showToast('pantDesign Choosed!');
}
showToast(msg) {
  this.toastCtrl.create({
    message: msg,
    duration: 2000
  }).then(toast => toast.present());
}
async ionViewWillEnter() {
  const loading = await this.loadingCtrl.create({
    spinner: 'circles',
    message: 'Loading Data...',
    duration: 1000
    
  });
  await loading.present();
}
async loadData() {
  const loading = await this.loadingCtrl.create({
    spinner: 'circles',
    keyboardClose: true,
    message: 'Loading...'
  });
  await loading.present();
  {
    loading.dismiss();
  }
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-kameezdesigns',
  templateUrl: './kameezdesigns.page.html',
  styleUrls: ['./kameezdesigns.page.scss'],
})
export class KameezdesignsPage implements OnInit {
  kameezdesigns = [];

  constructor(private router: Router, private cartService: CartService, private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.kameezdesigns = this.cartService.getProduct();
  }

  selectFabric(product){

    this.cartService.addkameezdesigns(product);
    this.loadData();
    this.router.navigate(['/skameez']);
    this.showToast('skDesign Choosed!');
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
showToast(msg) {
  this.toastCtrl.create({
    message: msg,
    duration: 2000
  }).then(toast => toast.present());
}
}

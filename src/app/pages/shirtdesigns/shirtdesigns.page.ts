import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-shirtdesigns',
  templateUrl: './shirtdesigns.page.html',
  styleUrls: ['./shirtdesigns.page.scss'],
})
export class ShirtdesignsPage implements OnInit {
shirtdesigns = [];
  constructor(private router: Router, private cartService: CartService, private toastCtrl: ToastController,private loadingCtrl: LoadingController) { }

  ngOnInit() {
        this.shirtdesigns = this.cartService.getProduct();

  }
  selectFabric(product){

    this.cartService.addshirtdesigns(product);
    this.loadData();
    this.router.navigate(['/shirt']);
    this.showToast('shirtDesign Choosed!');
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

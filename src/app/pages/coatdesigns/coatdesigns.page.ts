import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastController , LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-coatdesigns',
  templateUrl: './coatdesigns.page.html',
  styleUrls: ['./coatdesigns.page.scss'],
})
export class CoatdesignsPage implements OnInit {
  coatdesigns = [];
  constructor(private router: Router, private cartService: CartService, private toastCtrl: ToastController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.coatdesigns = this.cartService.getProduct();
  }
  selectFabric(product){

    this.cartService.addcoatdesigns(product);
    this.router.navigate(['/coat']);
    this.showToast('coatDesign Choosed!');
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

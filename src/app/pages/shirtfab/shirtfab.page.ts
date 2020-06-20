import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-shirtfab',
  templateUrl: './shirtfab.page.html',
  styleUrls: ['./shirtfab.page.scss'],
})
export class ShirtfabPage implements OnInit {
  cart = [];
  items = [];
  cartItemCount: BehaviorSubject<number>;

  constructor( private router: Router,
    private menu: MenuController,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProduct();
    this.cartItemCount = this.cartService.getacartItemCount();
  }

  openCart(){

    this.router.navigate(['/cart']);
}

addToCart(product){

  this.cartService.addProduct(product);
  this.loadData();
  this.showToast('Added');
}
selectFabric(product){

    this.cartService.addShirtfab(product);
    this.loadData();
    this.router.navigateByUrl('/shirt');
    this.showToast('ShirtFabric Choosed!');
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
async ionViewWillEnter() {
  const loading = await this.loadingCtrl.create({
    spinner: 'circles',
    message: 'Loading Data...',
    duration: 1000
    
  });
  await loading.present();
}

showToast(msg) {
  this.toastCtrl.create({
    message: msg,
    duration: 2000
  }).then(toast => toast.present());
}


}

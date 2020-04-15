import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, ToastController } from '@ionic/angular';
import { SKameezPage } from '../skameez/skameez.page';
import { Router } from '@angular/router';
import { analytics } from 'firebase';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-skfab',
  templateUrl: './skfab.page.html',
  styleUrls: ['./skfab.page.scss'],
})
export class SkfabPage implements OnInit {

  galleryType: string;
  cart = [];
  skameez = [];
  items = [];
  cartItemCount: BehaviorSubject<number>;

  constructor
    (
    private modalController: ModalController,
    private navCtrl: NavController, 
    private router: Router,
    private menu: MenuController,
    private cartService: CartService,
    private toastCtrl: ToastController
    ) 
  
  {
    this.menu.swipeGesture(false);
    this.galleryType = "summer";
  }



  ngOnInit() {

    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProduct();
    this.skameez = this.cartService.getProduct();
    this.cartItemCount = this.cartService.getacartItemCount();
  }

  openCart(){

      this.router.navigate(['/cart']);
  }

  addToCart(product){

    this.cartService.addProduct(product);
  }
  selectFabric(product){

      this.cartService.addakfabProduct(product);
      this.router.navigateByUrl('/skameez');
      this.showToast('SkFabric Choosed!');
      // this.router.navigateByUrl('/customer');
  }


  segmentChanged(ev: any) {
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }


}

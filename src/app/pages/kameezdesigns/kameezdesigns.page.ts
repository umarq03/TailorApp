import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-kameezdesigns',
  templateUrl: './kameezdesigns.page.html',
  styleUrls: ['./kameezdesigns.page.scss'],
})
export class KameezdesignsPage implements OnInit {

  // skameez = [];
  // items = [];
  kameezdesigns = [];

  constructor(private router: Router, private cartService: CartService, private toastCtrl: ToastController) { }

  ngOnInit() {
    // this.items = this.cartService.getProduct();
    // this.skameez = this.cartService.getProduct();
    this.kameezdesigns = this.cartService.getProduct();
  }

  selectFabric(product){

    this.cartService.addkameezdesigns(product);
    this.router.navigate(['/skameez']);
    this.showToast('skDesign Choosed!');
}
showToast(msg) {
  this.toastCtrl.create({
    message: msg,
    duration: 2000
  }).then(toast => toast.present());
}
}

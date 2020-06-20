import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  items = [];

  constructor(private cartService: CartService, private router: Router, private network: Network,
    private toastCtrl: ToastController) {
    this.network.onDisconnect().subscribe(()=>{
      this.showToast('Network was disconnected!')
    });
    
    this.network.onConnect().subscribe(()=>{

      setTimeout(() => {
        this.showToast('You got a '+''+this.network.type+'connection, woooho!');
      });
    });
   }

  ngOnInit() {
    this.items = this.cartService.getdummy();
    
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  removeItem(product){

    this.cartService.removeItem(product);
  }

  getTotal(){

    return this.items.reduce((i , j) => i + j.price * j.amount, 0)
  }

  checkout(){

    this.router.navigateByUrl('/checkout');
  }
    
  }
 

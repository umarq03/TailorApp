import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
 
  items = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.items = this.cartService.getCart();
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
 

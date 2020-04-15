import { Component, OnInit ,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { CustomerService } from '../customer.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';
import { CartService, Info } from 'src/app/services/cart.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.page.html',
  styleUrls: ['./create-customer.page.scss'],
})

export class CreateCustomerPage implements OnInit {
 
  items = [];
  private emp: Observable<any[]>;

  constructor(private cartService: CartService, public db: AngularFireDatabase) { 
  this.emp = db.list<any>('items').valueChanges();
  }

  ngOnInit() {
    this.items = this.cartService.getCart();
}
}

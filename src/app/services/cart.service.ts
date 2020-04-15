import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';


export interface Info {

  id?: string,
  yourname: string,
  phonenumber: string,
  address: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private infos: Observable<Info[]>;
  private ideaCollection: AngularFirestoreCollection<Info>;


  private data = [

    {

      category: 'skameez-summer',
      expend: true,
      Product: [

        { id: 0, name: 'Alkram Black-Summer', image: 'assets/fabric/shalwarkameez/summer/1.jpg', price: '800', amount: 1 },
        { id: 1, name: 'Alkram White-Summer', image: 'assets/fabric/shalwarkameez/summer/2.jpg', price: '900', amount: 1 },
        { id: 2, name: 'Alkram Blue-Summer', image: 'assets/fabric/shalwarkameez/summer/3.jpg', price: '1200', amount: 1 },
        { id: 3, name: 'Alkram DarkBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/4.jpg', price: '1400', amount: 1 },
        { id: 4, name: 'Alkram DarkGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/5.jpg', price: '1300', amount: 1 },
        { id: 5, name: 'Alkram DarkBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/6.jpg', price: '1600', amount: 1 },
        { id: 6, name: 'Alkram Cream-Summer', image: 'assets/fabric/shalwarkameez/summer/7.jpg', price: '1500', amount: 1 },
        { id: 7, name: 'Alkram Brown-Summer', image: 'assets/fabric/shalwarkameez/summer/8.jpg', price: '1800', amount: 1 },
        { id: 8, name: 'Alkram LightGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/9.jpg', price: '1700', amount: 1 },
        { id: 9, name: 'Alkram lightCream-Summer', image: 'assets/fabric/shalwarkameez/summer/10.jpg', price: '2000', amount: 1 },
        { id: 10, name: 'Alkram LightPink-Summer', image: 'assets/fabric/shalwarkameez/summer/11.jpg', price: '2300', amount: 1 },
        { id: 11, name: 'Alkram SkyBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/12.jpg', price: '2100', amount: 1 },
        { id: 12, name: 'Alkram Grey-Summer', image: 'assets/fabric/shalwarkameez/summer/13.jpg', price: '2500', amount: 1 },
        { id: 13, name: 'Alkram DarkGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/14.jpg', price: '2000', amount: 1 },
        { id: 14, name: 'Alkram LightBrown-Summer', image: 'assets/fabric/shalwarkameez/summer/15.jpg', price: '2700', amount: 1 },
        { id: 15, name: 'Alkram LightCream-Summer', image: 'assets/fabric/shalwarkameez/summer/16.jpg', price: '2200', amount: 1 },
        { id: 16, name: 'Alkram Blue-Summer', image: 'assets/fabric/shalwarkameez/summer/17.jpg', price: '3200', amount: 1 },
        { id: 17, name: 'Alkram Summer', image: 'assets/fabric/shalwarkameez/summer/18.jpg', price: '2300', amount: 1 },
        { id: 18, name: 'Alkram BlackBlue Summer', image: 'assets/fabric/shalwarkameez/summer/19.jpg', price: '1900', amount: 1 },
        { id: 19, name: 'Alkaram Summer', image: 'assets/fabric/shalwarkameez/summer/20.jpg', price: '2000', amount: 1 },
        { id: 20, name: 'Brown Summer', image: 'assets/fabric/shalwarkameez/summer/21.jpg', price: '3400', amount: 1 },
        { id: 21, name: 'J. Summer', image: 'assets/fabric/shalwarkameez/summer/22.jpg', price: '5000', amount: 1 },
        { id: 22, name: 'J.Summer', image: 'assets/fabric/shalwarkameez/summer/23.jpg', price: '2000', amount: 1 },
        { id: 23, name: 'Faisal Blue Summer', image: 'assets/fabric/shalwarkameez/summer/24.jpg', price: '5000', amount: 1 }

      ]


    },


    {
    category2: 'skameez-winter',
      Product2: [
        { id: 24, name: 'Faisal Grey-Winter', image: 'assets/fabric/shalwarkameez/winter/1.jpg', price: '800', amount: 1 },
        { id: 25, name: 'Faisla LightBrown-Winter', image: 'assets/fabric/shalwarkameez/winter/2.jpg', price: '1800', amount: 1 },
         { id: 26, name: 'Faisal Black-Winter', image: 'assets/fabric/shalwarkameez/winter/3.jpg', price: '2100', amount: 1 },
         { id: 27, name: 'Faisal Brown-Winter', image: 'assets/fabric/shalwarkameez/winter/4.jpg', price: '2200', amount: 1 },
         { id: 28, name: 'Alkram SkyBlue-Winter', image: 'assets/fabric/shalwarkameez/winter/5.jpg', price: '1300', amount: 1 },
         { id: 29, name: 'Faisal shineBlue', image: 'assets/fabric/shalwarkameez/winter/6.jpg', price: '1100', amount: 1 },
         { id: 30, name: 'Alkram Black', image: 'assets/fabric/shalwarkameez/winter/7.jpg', price: '900', amount: 1 },
         { id: 31, name: 'Faisal Collection', image: 'assets/fabric/shalwarkameez/winter/8.jpg', price: '2400', amount: 1 },
         { id: 32, name: 'Faisal Collection 2019', image: 'assets/fabric/shalwarkameez/winter/9.jpg', price: '1900', amount: 1 },
      ]
    },

    {
      category2: 'skameez-designs',
        Product3: [
          { id: 33,  image: 'assets/fabric/shalwarkameez/designs/1.jpg', price: '200', amount: 1 },
          { id: 34,  image: 'assets/fabric/shalwarkameez/designs/2.jpg', price: '220', amount: 1 },
          { id: 35,  image: 'assets/fabric/shalwarkameez/designs/3.jpg', price: '200', amount: 1 },
          { id: 36,  image: 'assets/fabric/shalwarkameez/designs/4.jpg', price: '300', amount: 1 },
          { id: 37,  image: 'assets/fabric/shalwarkameez/designs/5.jpg', price: '150', amount: 1 },
          { id: 38,  image: 'assets/fabric/shalwarkameez/designs/6.jpg', price: '90', amount: 1 },
          { id: 39,  image: 'assets/fabric/shalwarkameez/designs/7.jpg', price: '60', amount: 1 },
          { id: 40,  image: 'assets/fabric/shalwarkameez/designs/8.jpg', price: '350', amount: 1 },
          { id: 41,  image: 'assets/fabric/shalwarkameez/designs/9.jpg', price: '350', amount: 1 },
          { id: 42,  image: 'assets/fabric/shalwarkameez/designs/10.jpg', price: '400', amount: 1 },
        ]
      }
  ];

  private cart = [];
  private skameez = [];
  private kameezdesigns = [];
  private cartItemCount = new BehaviorSubject(0);

  //Checkout page Code

  constructor( private afs: AngularFirestore, private db: AngularFireDatabase) {
    this.ideaCollection = this.afs.collection<Info>('FabOrders');
    this.infos = this.ideaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

    
   }

  

   getInfo(): Observable<Info[]> {
    return this.infos;
  }

  getIdea(id: string): Observable<Info> {
    return this.ideaCollection.doc<Info>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  addIdea(info: Info): Promise<DocumentReference> {
    return this.ideaCollection.add(info);
  
  }

  updateIdea(info: Info): Promise<void> {
    return this.ideaCollection.doc(info.id).update({
     yourname: info.yourname, phonenumber: info.phonenumber,
     address: info.address
    });
  }

  deleteIdea(id: string): Promise<void> {
    return this.ideaCollection.doc(id).delete();
  }
//Checkout page code End

  getProduct() {
    return this.data;
  }

  getCart() {

    return this.cart;
  }
  getacartItemCount(){
    return this.cartItemCount;
  }

  getskameez() {
    return this.skameez;
  }
  getkameezdesigns() {
    return this.kameezdesigns;
  }


  addProduct(product) {

    let added  = false;
    for(let item of this.cart){

      if(item.id === product.id){
        item.amount +=1;
        added = true;
        break;
      }
    }
    if(!added){
    this.cart.push(product);
  }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  checkoutProduct(){


  }

  addakfabProduct(product) {

    let added  = false;
    for(let item of this.skameez){

      if(item.id === product.id){
        item.amount +=1;
        added = true;
        break;
      }
    }
    if(!added){
    this.skameez.push(product);
  }
  }

  addkameezdesigns(product) {

    let added  = false;
    for(let design of this.kameezdesigns){

      if(design.id === product.id){
        design.amount +=1;
        added = true;
        break;
      }
    }
    if(!added){
    this.kameezdesigns.push(product);
  }
  }

  removeskdesigns(product){

    for(let [index, design] of this.kameezdesigns.entries()){

      if(design.id === product.id){

        this.kameezdesigns.splice(index,1)
      }
    }

  }

  
  
  removeskamez(product){

    for(let [index, item] of this.skameez.entries()){

      if(item.id === product.id){

        this.skameez.splice(index,1)
      }
    }

  }

  

  removeItem(product){
    for(let [index, item] of this.cart.entries()){
      if(item.id === product.id){

        this.cartItemCount.next(this.cartItemCount.value - item.amount);
        this.cart.splice(index,1)
      }
    }

  }

}



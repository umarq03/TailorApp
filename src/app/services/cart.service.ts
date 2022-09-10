import { Injectable , OnInit, Component} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  template: `
    <h1 <div *ngFor="let setting of (titleSetting | async)"></div>>{{setting.title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class CartService implements OnInit{

constructor(){
}

ngOnInit() {
}

  // private data = [

  //   {

  //     category: 'shalwar-kameez',
  //     expend: true,
  //     Product: [

  //       { id: 0, name: `<div></div>` , image: 'assets/fabric/shalwarkameez/summer/1.jpg', price: '800', amount: 1, stitching: '850' },
  //       { id: 1, name: 'Alkram White-Summer', image: 'assets/fabric/shalwarkameez/summer/2.jpg', price: '900', amount: 1, stitching: '850' },
  //       { id: 2, name: 'Alkram Blue-Summer', image: 'assets/fabric/shalwarkameez/summer/3.jpg', price: '1200', amount: 1, stitching: '850' },
  //       { id: 3, name: 'Alkram DarkBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/4.jpg', price: '1400', amount: 1, stitching: '850' },
  //       { id: 4, name: 'Alkram DarkGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/5.jpg', price: '1300', amount: 1, stitching: '850' },
  //       { id: 5, name: 'Alkram DarkBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/6.jpg', price: '1600', amount: 1, stitching: '850' },
  //       { id: 6, name: 'Alkram Cream-Summer', image: 'assets/fabric/shalwarkameez/summer/7.jpg', price: '1500', amount: 1, stitching: '850' },
  //       { id: 7, name: 'Alkram Brown-Summer', image: 'assets/fabric/shalwarkameez/summer/8.jpg', price: '1800', amount: 1, stitching: '850' },
  //       { id: 8, name: 'Alkram LightGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/9.jpg', price: '1700', amount: 1, stitching: '850' },
  //       { id: 9, name: 'Alkram lightCream-Summer', image: 'assets/fabric/shalwarkameez/summer/10.jpg', price: '2000', amount: 1, stitching: '850' },
  //       { id: 10, name: 'Alkram LightPink-Summer', image: 'assets/fabric/shalwarkameez/summer/11.jpg', price: '2300', amount: 1, stitching: '850' },
  //       { id: 11, name: 'Alkram SkyBlue-Summer', image: 'assets/fabric/shalwarkameez/summer/12.jpg', price: '2100', amount: 1, stitching: '850' },
  //       { id: 12, name: 'Alkram Grey-Summer', image: 'assets/fabric/shalwarkameez/summer/13.jpg', price: '2500', amount: 1, stitching: '850' },
  //       { id: 13, name: 'Alkram DarkGrey-Summer', image: 'assets/fabric/shalwarkameez/summer/14.jpg', price: '2000', amount: 1, stitching: '850' },
  //       { id: 14, name: 'Alkram LightBrown-Summer', image: 'assets/fabric/shalwarkameez/summer/15.jpg', price: '2700', amount: 1, stitching: '850' },
  //       { id: 15, name: 'Alkram LightCream-Summer', image: 'assets/fabric/shalwarkameez/summer/16.jpg', price: '2200', amount: 1, stitching: '850' },
  //       { id: 16, name: 'Alkram Blue-Summer', image: 'assets/fabric/shalwarkameez/summer/17.jpg', price: '3200', amount: 1, stitching: '850' },
  //       { id: 17, name: 'Alkram Summer', image: 'assets/fabric/shalwarkameez/summer/18.jpg', price: '2300', amount: 1, stitching: '850' },
  //       { id: 18, name: 'Alkram BlackBlue Summer', image: 'assets/fabric/shalwarkameez/summer/19.jpg', price: '1900', amount: 1, stitching: '850' },
  //       { id: 19, name: 'Alkaram Summer', image: 'assets/fabric/shalwarkameez/summer/20.jpg', price: '2000', amount: 1, stitching: '850' },
  //       { id: 20, name: 'Brown Summer', image: 'assets/fabric/shalwarkameez/summer/21.jpg', price: '3400', amount: 1, stitching: '850' },
  //       { id: 21, name: 'J. Summer', image: 'assets/fabric/shalwarkameez/summer/22.jpg', price: '5000', amount: 1, stitching: '850' },
  //       { id: 22, name: 'J.Summer', image: 'assets/fabric/shalwarkameez/summer/23.jpg', price: '2000', amount: 1, stitching: '850' },
  //       { id: 23, name: 'Faisal Blue Summer', image: 'assets/fabric/shalwarkameez/summer/24.jpg', price: '5000', amount: 1, stitching: '850' }

  //     ]


  //   },


  //   {
  //     category2: 'skameez-winter',
  //     Product2: [
  //       { id: 24, name: 'Faisal Grey-Winter', image: 'assets/fabric/shalwarkameez/winter/1.jpg', price: '800', amount: 1 , stitching: '850'},
  //       { id: 25, name: 'Faisla LightBrown-Winter', image: 'assets/fabric/shalwarkameez/winter/2.jpg', price: '1800', amount: 1, stitching: '850' },
  //       { id: 26, name: 'Faisal Black-Winter', image: 'assets/fabric/shalwarkameez/winter/3.jpg', price: '2100', amount: 1 , stitching: '850'},
  //       { id: 27, name: 'Faisal Brown-Winter', image: 'assets/fabric/shalwarkameez/winter/4.jpg', price: '2200', amount: 1 , stitching: '850'},
  //       { id: 28, name: 'Alkram SkyBlue-Winter', image: 'assets/fabric/shalwarkameez/winter/5.jpg', price: '1300', amount: 1 , stitching: '850'},
  //       { id: 29, name: 'Faisal shineBlue', image: 'assets/fabric/shalwarkameez/winter/6.jpg', price: '1100', amount: 1, stitching: '850' },
  //       { id: 30, name: 'Alkram Black', image: 'assets/fabric/shalwarkameez/winter/7.jpg', price: '900', amount: 1, stitching: '850' },
  //       { id: 31, name: 'Faisal Collection', image: 'assets/fabric/shalwarkameez/winter/8.jpg', price: '2400', amount: 1 , stitching: '850'},
  //       { id: 32, name: 'Faisal Collection 2019', image: 'assets/fabric/shalwarkameez/winter/9.jpg', price: '1900', amount: 1 , stitching: '850'},
  //     ]
  //   },

  //   {
  //     category3: 'skameez-designs',
  //     Product3: [
  //       { id: 33, name:'Dandy Design', image: 'assets/fabric/shalwarkameez/designs/1.jpg', price: '200', amount: 1 },
  //       { id: 34,name:'Bargello V-Design', image: 'assets/fabric/shalwarkameez/designs/2.jpg', price: '220', amount: 1 },
  //       { id: 35, name:'Embroidered Design',image: 'assets/fabric/shalwarkameez/designs/3.jpg', price: '200', amount: 1 },
  //       { id: 36,name:'New Jersey NJ Design', image: 'assets/fabric/shalwarkameez/designs/4.jpg', price: '300', amount: 1 },
  //       { id: 37, name:'Beeston Leeds Design',image: 'assets/fabric/shalwarkameez/designs/5.jpg', price: '150', amount: 1 },
  //       { id: 38,name:'Halifax Design', image: 'assets/fabric/shalwarkameez/designs/6.jpg', price: '190', amount: 1 },
  //       { id: 39, name:'Bargello Design',image: 'assets/fabric/shalwarkameez/designs/7.jpg', price: '160', amount: 1 },
  //       { id: 40,name:'Flushing New York Design', image: 'assets/fabric/shalwarkameez/designs/8.jpg', price: '350', amount: 1 },
  //       { id: 41,name:'J. Design', image: 'assets/fabric/shalwarkameez/designs/9.jpg', price: '350', amount: 1 },
  //       { id: 42,name:'Flushing Design', image: 'assets/fabric/shalwarkameez/designs/10.jpg', price: '400', amount: 1 },
  //     ]
  //   },

  //   {
  //     category4: 'pantfab',
  //     Product4: [
  //       { id: 43, name: 'Faisal Trouser Black', image: 'assets/fabric/pant/1.jpg', price: '1200', amount: 1, stitching: '700' },
  //       { id: 44, name: 'Faisal Trouser Dark-Grey', image: 'assets/fabric/pant/2.jpg', price: '1000', amount: 1 , stitching: '700'},
  //       { id: 45, name: 'Faisal Trouser special', image: 'assets/fabric/pant/3.jpg', price: '1200', amount: 1 , stitching: '700'},
  //       { id: 46, name: 'Faisal Trouser checklines', image: 'assets/fabric/pant/4.jpg', price: '1400', amount: 1 , stitching: '700'},
  //       { id: 47, name: 'Movers Trouser Pant Blue', image: 'assets/fabric/pant/5.jpg', price: '1900', amount: 1 , stitching: '700'},
  //       { id: 48, name: 'Dinner TrouserPant ligthBlue  ', image: 'assets/fabric/pant/6.jpg', price: '2000', amount: 1 , stitching: '700'},
  //       { id: 49, name: 'Faisal TrouserPant SkyBlue ', image: 'assets/fabric/pant/7.jpg', price: '2200', amount: 1 , stitching: '700'},


  //     ]
  //   },
  //   {
  //     category5: 'shirtfab',
  //     Product5: [
  //       { id: 50, name: 'Expression CheckShirt Green', image: 'assets/fabric/shirt/1.jpg', price: '300', amount: 1 , stitching: '500'},
  //       { id: 51, name: 'Expression CheckShirt DotBlack', image: 'assets/fabric/shirt/2.jpg', price: '350', amount: 1 , stitching: '500'},
  //       { id: 52, name: 'Expression CheckShirt Feroz', image: 'assets/fabric/shirt/3.jpg', price: '310', amount: 1 , stitching: '500'},
  //       { id: 53, name: 'Expression CheckShirt DarkBlue', image: 'assets/fabric/shirt/4.jpg', price: '300', amount: 1 , stitching: '500'},
  //       { id: 54, name: 'Expression CheckShirt SkyBlue', image: 'assets/fabric/shirt/5.jpg', price: '250', amount: 1, stitching: '500' },
  //       { id: 55, name: 'Expression CheckShirt SkinMehroon', image: 'assets/fabric/shirt/6.jpg', price: '250', amount: 1, stitching: '500' },
  //       { id: 56, name: 'Expression CheckShirt LightSkin', image: 'assets/fabric/shirt/7.jpg', price: '400', amount: 1, stitching: '500' },
  //     ]
  //   },
  //   {
  //     category6: 'coatfab',
  //     Product6: [
  //       { id: 57, name: 'Yousaf CoatFab Grey', image: 'assets/fabric/coat/1.jpg', price: '1300', amount: 1, stitching: '3500' },
  //       { id: 58, name: 'Yousaf CoatFab LightGray', image: 'assets/fabric/coat/2.jpg', price: '1350', amount: 1, stitching: '3500'  },
  //       { id: 59, name: 'Yousaf CoatFab LightBrown', image: 'assets/fabric/coat/3.jpg', price: '1400', amount: 1, stitching: '3500'  },
  //       { id: 60, name: 'Yousaf CoatFab Blue', image: 'assets/fabric/coat/4.jpg', price: '1450', amount: 1 , stitching: '3500' },
  //       { id: 61, name: 'Yousaf CoatFab LightBlue', image: 'assets/fabric/coat/5.jpg', price: '2300', amount: 1 , stitching: '3500' },
  //       { id: 62, name: 'Yousaf CoatFab Black', image: 'assets/fabric/coat/6.jpg', price: '2000', amount: 1 , stitching: '3500' },
  //       { id: 63, name: 'Yousaf CoatFab DarkBlue', image: 'assets/fabric/coat/7.jpg', price: '2500', amount: 1 , stitching: '3500' },
  //     ]
  //   },
  //   {
  //     category7: 'waistcoatfab',
  //     Product7: [
  //       { id: 64, name: 'J.elite WaistCoatFab SkyBlue', image: 'assets/fabric/waistcoat/1.jpg', price: '1000', amount: 1 , stitching: '1800' },
  //       { id: 65, name: 'J.elite WaistCoatFab Brown', image: 'assets/fabric/waistcoat/2.jpg', price: '800', amount: 1 , stitching: '1800'},
  //       { id: 66, name: 'J.elite WaistCoatFab LightGrey', image: 'assets/fabric/waistcoat/3.jpg', price: '1100', amount: 1 , stitching: '1800'},
  //       { id: 67, name: 'J.elite WaistCoatFab Blue', image: 'assets/fabric/waistcoat/4.jpg', price: '1150', amount: 1 , stitching: '1800'},
  //       { id: 68, name: 'J.elite WaistCoatFab Skin', image: 'assets/fabric/waistcoat/5.jpg', price: '1250', amount: 1 , stitching: '1800'},
  //       { id: 69, name: 'J.elite WaistCoatFab LightBlue', image: 'assets/fabric/waistcoat/6.jpg', price: '1300', amount: 1 , stitching: '1800'},
  //       { id: 70, name: 'J.elite WaistCoatFab DarkBrown', image: 'assets/fabric/waistcoat/7.jpg', price: '1210', amount: 1 , stitching: '1800'}
  //     ]
  //   },
  //   {
  //     category8: 'kurtafab',
  //     Product8: [
  //       { id: 71, name: 'SIK KurtaFab Skin', image: 'assets/fabric/kurta/1.jpg', price: '900', amount: 1 , stitching: '900'},
  //       { id: 72, name: 'SIK KurtaFab LightGreen', image: 'assets/fabric/kurta/2.jpg', price: '980', amount: 1 , stitching: '900'},
  //       { id: 73, name: 'SIK KurtaFab DarkSkin', image: 'assets/fabric/kurta/3.jpg', price: '600', amount: 1, stitching: '900'},
  //       { id: 74, name: 'Superior KurtaFab ', image: 'assets/fabric/kurta/4.jpg', price: '1200', amount: 1 , stitching: '900'},
  //       { id: 75, name: 'SIK KurtaFab lightPink', image: 'assets/fabric/kurta/5.jpg', price: '1220', amount: 1 , stitching: '900'},
  //       { id: 76, name: 'SIK KurtaFab Grey', image: 'assets/fabric/kurta/6.jpg', price: '1300', amount: 1 , stitching: '900'},
  //       { id: 77, name: 'SIK KurtaFab White', image: 'assets/fabric/kurta/7.jpg', price: '900', amount: 1 , stitching: '900'}

  //     ]
  //   },
  //   {
  //     category9: 'pantdesigns',
  //     Product9: [
  //       { id: 78, name:'Men-Coat Design',image: 'assets/fabric/pant/designs/1.jpg', price: '200', amount: 1 },
  //       { id: 79, name:'TrouserKit InD Design',image: 'assets/fabric/pant/designs/2.jpg', price: '250', amount: 1 },
  //       { id: 80, name:'TrouserKit NY Design',image: 'assets/fabric/pant/designs/3.jpg', price: '220', amount: 1 },
  //       { id: 81,name:'Linen Trouser Design', image: 'assets/fabric/pant/designs/4.jpg', price: '150', amount: 1 },
  //       { id: 82, name:'Simple Business Design',image: 'assets/fabric/pant/designs/5.jpg', price: '180', amount: 1 },
  //     ]
  //   },
  //   {
  //     category10: 'shirtdesigns',
  //     Product10: [
  //       { id: 83,name:'Flap Design', image: 'assets/fabric/shirt/designs/1.jpg', price: '250', amount: 1 },
  //       { id: 84,name:'Avikalp Fashion Design', image: 'assets/fabric/shirt/designs/2.jpg', price: '280', amount: 1 },
  //       { id: 85, name:'DoublePockets Design',image: 'assets/fabric/shirt/designs/3.jpg', price: '260', amount: 1 },
  //       { id: 86, name:'HA Enterprises Design',image: 'assets/fabric/shirt/designs/4.jpg', price: '300', amount: 1 },
  //       { id: 87, name:'CasualPocket Design',image: 'assets/fabric/shirt/designs/5.jpg', price: '200', amount: 1 },
  //     ]
  //   },
  //   {
  //     category11: 'coatdesigns',
  //     Product11: [
  //       { id: 88, name:'Jacket Terno Masculino',image: 'assets/fabric/coat/designs/1.jpg', price: '400', amount: 1 },
  //       { id: 86,name:'Jacket Terno Masculino', image: 'assets/fabric/coat/designs/2.jpg', price: '400', amount: 1 },
  //       { id: 87,name:'Regualr Design'  ,image: 'assets/fabric/coat/designs/3.jpg', price: '250', amount: 1 },
  //       { id: 88, name:'OneBrest Button Blazer',image: 'assets/fabric/coat/designs/4.jpg', price: '280', amount: 1 },
  //       { id: 89,name:'TwoBrest Button Blazer' ,image: 'assets/fabric/coat/designs/5.jpg', price: '350', amount: 1 },
  //     ]
  //   },
  //   {
  //     category12: 'waistcoatdesigns',
  //     Product12: [
  //       { id: 89, name: 'Simple Regular Design',image: 'assets/fabric/waistcoat/designs/1.jpg', price: '250', amount: 1 },
  //       { id: 92,name:'Wedding Design' ,image: 'assets/fabric/waistcoat/designs/4.jpg', price: '280', amount: 1 },
  //       { id: 93, name:'Endenrobe Design ',image: 'assets/fabric/waistcoat/designs/5.jpg', price: '240', amount: 1 },
  //     ]
  //   },
  //   {
  //     category13: 'kurtadesigns',
  //     Product13: [
  //       { id: 94, name:'Semi-Formal Design',image: 'assets/fabric/kurta/designs/1.jpg', price: '250', amount: 1 },
  //       { id: 95, name:'DC Embroided Design',image: 'assets/fabric/kurta/designs/2.jpg', price: '250', amount: 1 },
  //       { id: 96, name:'Needlhole Design',image: 'assets/fabric/kurta/designs/3.jpg', price: '300', amount: 1 },
  //       { id: 97, name:'Embroided Green Design',image: 'assets/fabric/kurta/designs/4.jpg', price: '300', amount: 1 },
  //       { id: 98, name:'FormalWedding Design',image: 'assets/fabric/kurta/designs/5.jpg', price: '300', amount: 1 },
  //     ]
  //   }
  // ];

  private cart = [];
  // private dummy = [];
  private skameez = [];
  private pantfab = [];
  private shirtfab = [];
  private coatfab = [];
  private waistcoatfab = [];
  private kurtafab = [];
  private kameezdesigns = [];
  private pantdesgins = [];
  private shirtdesgins = [];
  private coatdesigns = [];
  private waistcoatdesigns = [];
  private kurtadesigns = [];
  // private cartItemCount = new BehaviorSubject(0);


  // getProduct() {
  //   return this.data;
  // }

  // getCart() {

  //   return this.cart;
  // }
  // getacartItemCount() {
  //   return this.cartItemCount;
  // }
  getskameezsummer() {
    return this.skameez;
  }
  getskameezwinter(){
    return this.skameez;
  }
  getkameezdesigns() {
    return this.kameezdesigns;
  }
  getpant() {
    return this.pantfab;
  }
  getwpant() {
    return this.pantfab;
  }
  getshirt() {
    return this.shirtfab;
  }
  getwshirt() {
    return this.shirtfab;
  }
  getkurta() {
    return this.kurtafab;
  }
  getwkurta() {
    return this.kurtafab;
  }
  getcoat() {
    return this.coatfab;
  }
  getwcoat() {
    return this.coatfab;
  }
  getwaistcoat() {
    return this.waistcoatfab;
  }
  getwwaistcoat() {
    return this.waistcoatfab;
  }
  getpantdesigns() {
    return this.pantdesgins;
  }
  getshirtdesigns() {
    return this.shirtdesgins;
  }
  getcoatdesigns() {
    return this.coatdesigns;
  }
  getwaistcoatdesigns() {
    return this.waistcoatdesigns;
  }
  getkurtadesigns() {
    return this.kurtadesigns;
  }

  skWFab(win) {

    let added = false;
    for (let fa of this.skameez) {

      if (fa.id === win.id) {
        // item.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.skameez.push(win);
    }
  }

  skSFab(summ) {

    let added = false;
    for (let item of this.skameez) {

      if (item.id === summ.id) {
        item.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.skameez.push(summ);
    }
  }
  removeskamez(product) {
    for (let [index, item] of this.skameez.entries()) {
      if (item.id === product.id) {
        this.skameez.splice(index, 1)
      }
    }
  }
  Coatfab(summ) {
    let added = false;
    for (let item of this.coatfab) {

      if (item.id === summ.id) {
        item.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.coatfab.push(summ);
    }
  }
  Wcoatfab(win) {
    let added = false;
    for (let item of this.coatfab) {

      if (item.id === win.id) {
        item.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.coatfab.push(win);
    }
  }
  removecoat(product) {
    for (let [index, item] of this.coatfab.entries()) {
      if (item.id === product.id) {
        this.coatfab.splice(index, 1)
      }
    }
  }
  Kurtafab(summ) {
    let added = false;
    for (let kurtafab of this.kurtafab) {

      if (kurtafab.id === summ.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.kurtafab.push(summ);
    }
  }
  wKurtafab(win) {
    let added = false;
    for (let kurtafab of this.kurtafab) {

      if (kurtafab.id === win.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.kurtafab.push(win);
    }
  }
  removekurta(product) {
    for (let [index, item] of this.kurtafab.entries()) {
      if (item.id === product.id) {
        this.coatfab.splice(index, 1)
      }
    }
  }
  pantfabb(summ) {
    let added = false;
    for (let kurtafab of this.pantfab) {

      if (kurtafab.id === summ.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.pantfab.push(summ);
    }
  }
  wpantfab(win) {
    let added = false;
    for (let kurtafab of this.pantfab) {

      if (kurtafab.id === win.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.pantfab.push(win);
    }
  }
  removepant(product) {
    for (let [index, item] of this.pantfab.entries()) {
      if (item.id === product.id) {
        this.pantfab.splice(index, 1)
      }
    }
  }
  shirtfabb(summ) {
    let added = false;
    for (let kurtafab of this.shirtfab) {

      if (kurtafab.id === summ.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.shirtfab.push(summ);
    }
  }
  wshirtfab(win) {
    let added = false;
    for (let kurtafab of this.shirtfab) {

      if (kurtafab.id === win.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.shirtfab.push(win);
    }
  }
  removeshirt(product) {
    for (let [index, item] of this.shirtfab.entries()) {
      if (item.id === product.id) {
        this.shirtfab.splice(index, 1)
      }
    }
  }
  wcoatfabb(summ) {
    let added = false;
    for (let kurtafab of this.waistcoatfab) {

      if (kurtafab.id === summ.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.waistcoatfab.push(summ);
    }
  }
  wwcoatfab(win) {
    let added = false;
    for (let kurtafab of this.waistcoatfab) {

      if (kurtafab.id === win.id) {
        kurtafab.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.waistcoatfab.push(win);
    }
  }
  removewcoat(product) {
    for (let [index, item] of this.waistcoatfab.entries()) {
      if (item.id === product.id) {
        this.waistcoatfab.splice(index, 1)
      }
    }
  }

  addkameezdesigns(product) {

    let added = false;
    for (let design of this.kameezdesigns) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.kameezdesigns.push(product);
    }
  }
  removeskdesigns(product) {

    for (let [index, design] of this.kameezdesigns.entries()) {

      if (design.id === product.id) {

        this.kameezdesigns.splice(index, 1)
      }
    }

  }
  
  addpantdesigns(product) {
    let added = false;
    for (let design of this.pantdesgins) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.pantdesgins.push(product);
    }
  }
  removepantdesigns(product) {

    for (let [index, design] of this.pantdesgins.entries()) {

      if (design.id === product.id) {

        this.pantdesgins.splice(index, 1)
      }
    }

  }
  addshirtdesigns(product) {
    let added = false;
    for (let design of this.shirtdesgins) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.shirtdesgins.push(product);
    }
  }
  removeshirtdesigns(product) {

    for (let [index, design] of this.shirtdesgins.entries()) {

      if (design.id === product.id) {

        this.shirtdesgins.splice(index, 1)
      }
    }

  }
  
  addcoatdesigns(product) {
    let added = false;
    for (let design of this.coatdesigns) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.coatdesigns.push(product);
    }
  }
  removecoatdesigns(product) {

    for (let [index, design] of this.coatdesigns.entries()) {

      if (design.id === product.id) {

        this.coatdesigns.splice(index, 1)
      }
    }

  }
  addwaistcoatdesigns(product) {
    let added = false;
    for (let design of this.waistcoatdesigns) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.waistcoatdesigns.push(product);
    }
  }
  removewcoatdesigns(product) {

    for (let [index, design] of this.waistcoatdesigns.entries()) {

      if (design.id === product.id) {

        this.waistcoatdesigns.splice(index, 1)
      }
    }

  }
  addkurtadesigns(product) {
    let added = false;
    for (let design of this.kurtadesigns) {

      if (design.id === product.id) {
        design.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.kurtadesigns.push(product);
    }
  }
  removekurtadesigns(product) {

    for (let [index, design] of this.kurtadesigns.entries()) {

      if (design.id === product.id) {

        this.kurtadesigns.splice(index, 1)
      }
    }

  }

}



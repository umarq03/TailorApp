import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams, NavController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editkurtafabric',
  templateUrl: './editkurtafabric.page.html',
  styleUrls: ['./editkurtafabric.page.scss'],
})
export class EditkurtafabricPage implements OnInit {
  kurtasummerfab: AngularFirestoreCollection;
  kurtasummer: Observable<any[]>;
  kurtawinterfab: AngularFirestoreCollection;
  kurtawinter: Observable<any[]>;

  fabric = {
    id: '',
    fabname: '',
    price: '',
    discount: '',
    stock: '',
    meter: '',
    stitching:''
  }
  constructor(private router: Router, private navParam: NavParams, private activatedRoute: ActivatedRoute,
    private db: AngularFirestore, private navCtrl: NavController, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { 
      this.kurtasummerfab = db.collection('kurtasummerfabData')
      this.kurtasummer = this.kurtasummerfab.valueChanges();
  
      this.kurtawinterfab = db.collection('kurtawinterfabData')
      this.kurtawinter = this.kurtawinterfab.valueChanges();
  
      this.fabric.id = this.activatedRoute.snapshot.paramMap.get('id');
      this.fabric.fabname = this.activatedRoute.snapshot.paramMap.get('fabname');
      this.fabric.price = this.activatedRoute.snapshot.paramMap.get('price');
      this.fabric.meter = this.activatedRoute.snapshot.paramMap.get('meter');
      this.fabric.discount = this.activatedRoute.snapshot.paramMap.get('discount');
      this.fabric.stock = this.activatedRoute.snapshot.paramMap.get('stock');
      this.fabric.stitching = this.activatedRoute.snapshot.paramMap.get('stitching');

    }

  ngOnInit() {
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  async updateSummer(id, fabname, price, discount, stock, meter) {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'UpdatingSummerFab...',

    });
    await loading.present();

    this.kurtasummerfab.doc(this.fabric.id).update({
      fabname: this.fabric.fabname,
      price: this.fabric.price,
      discount: this.fabric.discount,
      stock: this.fabric.stock,
      meter: this.fabric.meter,
      stitching: this.fabric.stitching
    }).then(person => { this.navCtrl.pop(); }, error => { console.log(error); })
    this.showToast('Summer fabric updated')
    this.loadingCtrl.dismiss();


  }
  async updateWinter(id, fabname, price, discount, stock, meter) {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'UpdatingWinterFab...',

    });
    await loading.present();
    this.kurtawinterfab.doc(this.fabric.id).update({
      fabname: this.fabric.fabname,
      price: this.fabric.price,
      discount: this.fabric.discount,
      stock: this.fabric.stock,
      meter: this.fabric.meter,
      stitching: this.fabric.stitching
    }).then(person => { this.navCtrl.pop(); }, error => { console.log(error); })
    this.showToast('Winter fabric updated')
    this.loadingCtrl.dismiss();
  }

}

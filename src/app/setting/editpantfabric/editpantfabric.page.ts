import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams, NavController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editpantfabric',
  templateUrl: './editpantfabric.page.html',
  styleUrls: ['./editpantfabric.page.scss'],
})
export class EditpantfabricPage implements OnInit {
  pantsummerfab: AngularFirestoreCollection;
  pantsummer: Observable<any[]>;
  pantwinterfab: AngularFirestoreCollection;
  pantwinter: Observable<any[]>;

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
    this.pantsummerfab = db.collection('pantsummerfabData')
    this.pantsummer = this.pantsummerfab.valueChanges();

    this.pantwinterfab = db.collection('pantwinterfabData')
    this.pantwinter = this.pantwinterfab.valueChanges();

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

    this.pantsummerfab.doc(this.fabric.id).update({
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
    this.pantwinterfab.doc(this.fabric.id).update({
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

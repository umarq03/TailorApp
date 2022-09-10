import { Component, OnInit } from '@angular/core';
import {
  ToastController, LoadingController, NavParams, AlertController
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Chooser } from '@ionic-native/chooser/ngx';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-skdesign',
  templateUrl: './skdesign.page.html',
  styleUrls: ['./skdesign.page.scss'],
})
export class SkdesignPage implements OnInit {
  selectedFile: any;
  skdesigns: AngularFirestoreCollection;
  skdesign: Observable<any[]>;
  design = {
    name: '',
    price: ''
  }
  constructor(public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private chooser: Chooser,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private cartitem: CartService) {
    this.skdesigns = db.collection('skdesignData')
    this.skdesign = this.skdesigns.valueChanges();

  }

  ngOnInit() {
  }
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
  choosedesign(event) {
    this.selectedFile = event.target.files;
  }

  async add() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Adding Design...'
    });
    await loading.present();

    this.skdesigns.add({
      name: this.design.name, price: this.design.price
    }).then(async resp => {
      const image = await this.uploadFile(resp.id, this.selectedFile)
      this.skdesigns.doc(resp.id).update({
        id: resp.id,
        image: image || null
      })
      loading.dismiss();
      this.showToast('Design Added');
      this.router.navigateByUrl('addesign');
    })
  }
  async uploadFile(id, file): Promise<any> {
    if (file && file.length) {
      try {
        const task = await this.storage.ref('skdesign').child(id).put(file[0]);
        return this.storage.ref(`skdesign/${id}`).getDownloadURL().toPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }

}

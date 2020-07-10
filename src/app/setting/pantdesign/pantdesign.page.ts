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
  selector: 'app-pantdesign',
  templateUrl: './pantdesign.page.html',
  styleUrls: ['./pantdesign.page.scss'],
})
export class PantdesignPage implements OnInit {
  selectedFile: any;
  pantdesigns: AngularFirestoreCollection;
  pantdesign: Observable<any[]>;
  design = {
    name: '',
    price: ''
  }
  constructor(
    public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private chooser: Chooser,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private cartitem: CartService
  ) {
    this.pantdesigns = db.collection('pantdesignData')
    this.pantdesign = this.pantdesigns.valueChanges();
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
      message: 'Adding design...'
    });
    await loading.present();

    this.pantdesigns.add({
      name: this.design.name, price: this.design.price
    }).then(async resp => {
      const image = await this.uploadFile(resp.id, this.selectedFile)
      this.pantdesigns.doc(resp.id).update({
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
        const task = await this.storage.ref('pantdesign').child(id).put(file[0]);
        return this.storage.ref(`pantdesign/${id}`).getDownloadURL().toPromise();
      } catch (err) {
        console.log(err);
      }
    }
  }

}

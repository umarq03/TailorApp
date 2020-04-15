import { Component, OnInit } from '@angular/core';
import {
  AlertController, ToastController, MenuController,
  LoadingController, PopoverController, NavController, NavParams
} from '@ionic/angular';
import { analytics } from 'firebase';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DatabaseService, Idea } from 'src/app/services/database.service';

@Component({
  selector: 'app-skameez',
  templateUrl: './skameez.page.html',
  styleUrls: ['./skameez.page.scss'],
})
export class SKameezPage implements OnInit {

  skameez = [];
  kameezdesigns = [];

  idea: Idea = {
    fabric: '',
    design: '',
    fullname: '',
    phonenumber: '',
    address: '',
    lambai: '',
    chatti: '',
    teera: '',
    kameezbazu: '',
    neck: '',
    kameezdaman: '',
    shalwarlambai: '',
    pancha: '',
    daman: '',
    pockets: '',
    collar: '',
    bazu: '',
    creaditAt: new Date().getTime()
  };

  constructor(private menu: MenuController,
    private popoverCtrl: PopoverController,
    private navCtrl: NavController,
    public navparam: NavParams,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private database: DatabaseService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {

    this.menu.swipeGesture(false);
  }


  ngOnInit() {
    this.skameez = this.cartService.getskameez();
    this.kameezdesigns = this.cartService.getkameezdesigns();
  }
  removeItem(product) {
    this.cartService.removeskamez(product);
  }

  removedesigns(product) {
    this.cartService.removeskdesigns(product);
  }

  getTotal() {
    return this.skameez.reduce((i, j) => i + j.price * j.amount, 0)
  }

  async optionsPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  getskfab() {
    this.navCtrl.navigateForward('/skfab');
  }
  getskdesigns() {
    this.navCtrl.navigateForward('/kameezdesigns');
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.database.getIdea(id).subscribe(idea => {
        this.idea = idea;
        this.loadData();
      });
    }
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading Data..'
    });
    await loading.present();
    {
      loading.dismiss();
    }

  }

  async addDatabase() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Sending Data...'
    });
    await loading.present();

    this.database.addIdea(this.idea).then(() => {
      loading.dismiss();
      this.showToast('Data Sent!');
    }, err => {
      this.showToast('There was a problem adding your SKdata :(');
    });
  }

  async deleteIdea() {

    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Deleting Data...'
    });
    await loading.present();

    this.database.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast('Skdata deleted');
    }, err => {
      this.showToast('There was a problem deleting your Skdata :(');
    });
  }

  async updateIdea() {

    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Updating Data...'
    });
    await loading.present();

    this.database.updateIdea(this.idea).then(() => {
      this.router.navigateByUrl('/admin-database');
      loading.dismiss();
      this.showToast('Skdata updated');
    }, err => {
      this.showToast('There was a problem updating your Skdata :(');
    });
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }





}

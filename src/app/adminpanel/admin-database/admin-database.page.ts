import { Component, OnInit, OnDestroy } from '@angular/core';
import { DatabaseService, Idea } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';
import { PantdatabasePage } from '../pantdatabase/pantdatabase.page';
import { ShirtdatabasePage } from '../shirtdatabase/shirtdatabase.page';
import { KurtadatabasePage } from '../kurtadatabase/kurtadatabase.page';
import { CoatdatabasePage } from '../coatdatabase/coatdatabase.page';
import { WcoatdatabasePage } from '../wcoatdatabase/wcoatdatabase.page';
import {  Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-admin-database',
  templateUrl: './admin-database.page.html',
  styleUrls: ['./admin-database.page.scss'],
})
export class AdminDatabasePage implements OnInit {
 
  skDatabase = SkdatabasePage;
  pantDatabase = PantdatabasePage;
  shirtDatabase = ShirtdatabasePage;
  kurtaDatabase = KurtadatabasePage;
  coatDatabase = CoatdatabasePage;
  wcoatDatabase = WcoatdatabasePage;

  constructor(private database: DatabaseService, 
    private loadingCtrl: LoadingController, 
    private router: Router,
    private network:Network,
    public dialog: Dialogs) {
    this.network.onDisconnect().subscribe(()=>{
      this.dialog.alert('Network was disconnected!')
    });
    
    this.network.onConnect().subscribe(()=>{

      setTimeout(() => {
        this.dialog.alert('You got a '+''+this.network.type+'connection, woooho!');
      }, 2000);
    });
  }

 ngOnInit() {
   
  }

  async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Loading Data...',
      duration: 1500
      
    });
    await loading.present();
  }
 
}

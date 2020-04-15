import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, Idea } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';
import { PantdatabasePage } from '../pantdatabase/pantdatabase.page';
import { ShirtdatabasePage } from '../shirtdatabase/shirtdatabase.page';
import { KurtadatabasePage } from '../kurtadatabase/kurtadatabase.page';
import { CoatdatabasePage } from '../coatdatabase/coatdatabase.page';
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

  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) {
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Loading Data...',
      duration: 2500
      
    });
    await loading.present();
  }



 
}

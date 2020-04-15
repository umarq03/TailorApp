import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, Idea } from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-skdatabase',
  templateUrl: './skdatabase.page.html',
  styleUrls: ['./skdatabase.page.scss'],
})
export class SkdatabasePage implements OnInit {
  private skdata: Observable<Idea[]>;
  public searchTerm: string = "";
  offset = 0;
  searching = false;

  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getDatabase();
    this.ionViewDidEnter();
  }

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Loading Data...',
      duration: 2500
      
    });
    await loading.present();
    this.getDatabase();
  }

  async ionViewWillLoad() {
    const loading = await this.loadingCtrl.create({
      spinner: 'circles',
      message: 'Loading Data...',
      duration: 2500
      
    });
    await loading.present();
    this.getDatabase();
  }

  getDatabase() {
    this.searching = true;
    this.skdata = this.database.getIdeas();
    this.searching = false;
     
  }
}

import { Component, OnInit } from '@angular/core';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DatabaseService, Kurta} from 'src/app/services/database.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-kurtadatabase',
  templateUrl: './kurtadatabase.page.html',
  styleUrls: ['./kurtadatabase.page.scss'],
})
export class KurtadatabasePage implements OnInit {
  skdatabase = SkdatabasePage;
  private kurtadata: Observable<Kurta[]>;
  offset = 0;
  searching = false;
  constructor(private database: DatabaseService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.getDatabase();
  }
  searchTerm = '';
  searchText = '';
  
  filterMe() {
    console.log('searchterm', this.searchTerm);
    this.searchText = '';
    if (this.searchTerm != null) {
      this.searchText = this.searchTerm.toLowerCase();
    } else {
      this.searchText = '';
    }

    this.kurtadata = this.kurtadata.pipe(
        map((reports: any[]) => reports.filter(p => {
          if (p.fullname.toString().toLowerCase().indexOf(this.searchText) > -1) {return p; }
        }))
    );
      }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  getDatabase() {
    this.searching = true;
    this.kurtadata = this.database.getKurtas();
    this.searching = false;
     
  }

}

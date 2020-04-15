import { Component, OnInit } from '@angular/core';
import { SkdatabasePage } from '../skdatabase/skdatabase.page';

@Component({
  selector: 'app-pantdatabase',
  templateUrl: './pantdatabase.page.html',
  styleUrls: ['./pantdatabase.page.scss'],
})
export class PantdatabasePage implements OnInit {
  skdatabase = SkdatabasePage;
  constructor() { }

  ngOnInit() {
  }

}

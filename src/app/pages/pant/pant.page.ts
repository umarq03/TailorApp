import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.page.html',
  styleUrls: ['./pant.page.scss'],
})
export class PantPage implements OnInit {

  text: any;

  constructor( private menu: MenuController, public avtiveRoute: ActivatedRoute) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {

    this.text = this.avtiveRoute.snapshot.paramMap.get('text');
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pant',
  templateUrl: './pant.page.html',
  styleUrls: ['./pant.page.scss'],
})
export class PantPage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}

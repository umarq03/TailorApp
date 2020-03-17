import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-waistcoat',
  templateUrl: './waistcoat.page.html',
  styleUrls: ['./waistcoat.page.scss'],
})
export class WaistcoatPage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}

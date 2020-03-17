import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-kurta',
  templateUrl: './kurta.page.html',
  styleUrls: ['./kurta.page.scss'],
})
export class KurtaPage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}

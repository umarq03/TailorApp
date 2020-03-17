import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-threepiece',
  templateUrl: './threepiece.page.html',
  styleUrls: ['./threepiece.page.scss'],
})
export class ThreepiecePage implements OnInit {

  constructor( private menu: MenuController) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
  }

}

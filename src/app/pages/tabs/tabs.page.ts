import { Component, OnInit } from '@angular/core';
import { MainHomePage } from '../main-home/main-home.page';
import { Routes, RouterModule } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private menu: MenuController) { }


  
 
 
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/popover/popover.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
})
export class DesignsPage implements OnInit {
  text : string;

  constructor( private menu: MenuController,private popoverCtrl: PopoverController, private router: Router) { 

    this.menu.enable(true, 'first');
  }

  ngOnInit() {
  }

  async optionsPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  passData(){

    this.router.navigate(['/pant', {text:this.text}]);
  
    
  }
  favdish ={}
  task(){
    console.log(this.favdish);
  }


}

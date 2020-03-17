import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {
img: any;






  constructor(private navParam: NavParams, private modalController: ModalController ) { }

  ngOnInit() {
    this.img = this.navParam.get('img');
  }

  zoom (zoomIn: boolean){

  }

  close(){

    this.modalController.dismiss();
  }

}

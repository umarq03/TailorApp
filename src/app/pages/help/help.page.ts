import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Observable } from 'rxjs';
import { DatabaseService, titleSetting, starterSetting, emailSetting } from 'src/app/services/database.service';
import { Network } from '@ionic-native/network/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  private emailSetting: Observable<emailSetting[]>;
  searching: boolean = true;

  constructor(private emailComposer: EmailComposer,private database: DatabaseService,
    private network: Network, private toastCtrl: ToastController,private loadingCtrl: LoadingController) {
     }

  ngOnInit() {
    this.emailSetting = this.database.getEmailSettings();
    this.emailSetting.subscribe(()=> this.searching = false);

  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  sendEmail() {

 this.emailComposer.open({
   subject:'Any',
   isHtml:true
 });

  }

}

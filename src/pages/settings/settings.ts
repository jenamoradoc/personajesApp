import { Component   } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { JediPage, SithPage } from "../index.paginas";


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  SithLordsList(){
    this.navCtrl.push(SithPage)
    
  }

  JediMasterList(){
    this.navCtrl.push(JediPage)
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }
  

}

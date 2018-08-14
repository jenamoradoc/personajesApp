

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { JediPage, SithPage } from "../index.paginas";

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private menuCtrl: MenuController
  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  jedimasters(){
    this.navCtrl.push(JediPage);
  }

  sithlords(){
    this.navCtrl.push(SithPage);  
  }

  mostrarMenu(){
    this.menuCtrl.toggle();
  }

  

}

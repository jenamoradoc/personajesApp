
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-infojedi',
  templateUrl: 'infojedi.html',
})
export class InfojediPage {

  personaje:any={}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);

    this.personaje=this.navParams.get("personaje")
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InfojediPage');
  }

  irahome(){
    this.navCtrl.popToRoot();
  }

}

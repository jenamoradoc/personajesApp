import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-infosith',
  templateUrl: 'infosith.html',
})
export class InfosithPage {

  personaje:any={}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams);

    this.personaje=this.navParams.get("personaje")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosithPage');
  }

  irahome(){
    this.navCtrl.popToRoot();
  }

}

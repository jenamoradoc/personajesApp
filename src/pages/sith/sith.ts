import { personaje } from './../../interfaces/personajes.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfosithPage } from "../index.paginas";
import { SITHLORDS } from "../../assets/data/data.sithlords";


@IonicPage()
@Component({
  selector: 'page-sith',
  templateUrl: 'sith.html',
})
export class SithPage {

  siths:personaje[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.siths = SITHLORDS.splice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SithPage');
  }

  mostrarpersonaje(personaje:any){
    console.log( personaje );
    
    this.navCtrl.push( InfosithPage, {'personaje':personaje})
  }



}

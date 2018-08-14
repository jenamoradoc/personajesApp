import { InfojediPage } from './../infojedi/infojedi';

import { JEDIMASTERS } from "../../assets/data/data.jedimasters";
import { personaje } from "../../interfaces/personajes.interface";

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-jedi',
  templateUrl: 'jedi.html',
})
export class JediPage {

  jedis: personaje[]=[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
    // this.jedis = JEDIMASTERS.splice(0);
    this.jedis = JEDIMASTERS;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JediPage');
  }

  mostrarpersonaje(personaje:any){
    console.log( personaje );
    
    this.navCtrl.push( InfojediPage, {'personaje':personaje})
  }

  

}

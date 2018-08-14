import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GreyjediPage } from './greyjedi';

@NgModule({
  declarations: [
    GreyjediPage,
  ],
  imports: [
    IonicPageModule.forChild(GreyjediPage),
  ],
})
export class GreyjediPageModule {}

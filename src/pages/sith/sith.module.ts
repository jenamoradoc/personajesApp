import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SithPage } from './sith';

@NgModule({
  declarations: [
    SithPage,
  ],
  imports: [
    IonicPageModule.forChild(SithPage),
  ],
})
export class SithPageModule {}

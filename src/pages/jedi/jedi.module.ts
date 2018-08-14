import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JediPage } from './jedi';

@NgModule({
  declarations: [
    JediPage,
  ],
  imports: [
    IonicPageModule.forChild(JediPage),
  ],
})
export class JediPageModule {}

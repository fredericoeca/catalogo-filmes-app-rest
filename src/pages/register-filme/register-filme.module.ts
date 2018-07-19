import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFilmePage } from './register-filme';

@NgModule({
  declarations: [
    RegisterFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFilmePage),
  ],
})
export class RegisterFilmePageModule {}

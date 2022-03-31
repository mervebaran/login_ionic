import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginowPageRoutingModule } from './loginow-routing.module';

import { LoginowPage } from './loginow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginowPageRoutingModule
  ],
  declarations: [LoginowPage]
})
export class LoginowPageModule {}

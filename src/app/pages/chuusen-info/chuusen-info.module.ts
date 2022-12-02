import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuusenInfoPageRoutingModule } from './chuusen-info-routing.module';

import { ChuusenInfoPage } from './chuusen-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuusenInfoPageRoutingModule
  ],
  declarations: [ChuusenInfoPage]
})
export class ChuusenInfoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuusenWinnerPageRoutingModule } from './chuusen-winner-routing.module';

import { ChuusenWinnerPage } from './chuusen-winner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuusenWinnerPageRoutingModule
  ],
  declarations: [ChuusenWinnerPage]
})
export class ChuusenWinnerPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuusenReservePageRoutingModule } from './chuusen-reserve-routing.module';

import { ChuusenReservePage } from './chuusen-reserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuusenReservePageRoutingModule
  ],
  declarations: [ChuusenReservePage]
})
export class ChuusenReservePageModule {}

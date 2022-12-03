import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuusenConfirmPageRoutingModule } from './chuusen-confirm-routing.module';

import { ChuusenConfirmPage } from './chuusen-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuusenConfirmPageRoutingModule
  ],
  declarations: [ChuusenConfirmPage]
})
export class ChuusenConfirmPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChuusenTicketPageRoutingModule } from './chuusen-ticket-routing.module';

import { ChuusenTicketPage } from './chuusen-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChuusenTicketPageRoutingModule
  ],
  declarations: [ChuusenTicketPage]
})
export class ChuusenTicketPageModule {}

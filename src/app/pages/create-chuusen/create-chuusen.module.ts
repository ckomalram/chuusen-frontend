import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChuusenPageRoutingModule } from './create-chuusen-routing.module';

import { CreateChuusenPage } from './create-chuusen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateChuusenPageRoutingModule
  ],
  declarations: [CreateChuusenPage]
})
export class CreateChuusenPageModule {}

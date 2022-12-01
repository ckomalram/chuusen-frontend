import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChuusenPageRoutingModule } from './create-chuusen-routing.module';

import { CreateChuusenPage } from './create-chuusen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    CreateChuusenPageRoutingModule
  ],
  declarations: [CreateChuusenPage]
})
export class CreateChuusenPageModule {}

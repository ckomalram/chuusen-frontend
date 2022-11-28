import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectNumbersPageRoutingModule } from './select-numbers-routing.module';

import { SelectNumbersPage } from './select-numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectNumbersPageRoutingModule
  ],
  declarations: [SelectNumbersPage]
})
export class SelectNumbersPageModule {}

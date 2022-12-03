import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuusenReservePage } from './chuusen-reserve.page';

const routes: Routes = [
  {
    path: '',
    component: ChuusenReservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuusenReservePageRoutingModule {}

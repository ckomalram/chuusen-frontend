import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuusenWinnerPage } from './chuusen-winner.page';

const routes: Routes = [
  {
    path: '',
    component: ChuusenWinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuusenWinnerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuusenConfirmPage } from './chuusen-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: ChuusenConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuusenConfirmPageRoutingModule {}

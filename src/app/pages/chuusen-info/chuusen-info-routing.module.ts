import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuusenInfoPage } from './chuusen-info.page';

const routes: Routes = [
  {
    path: '',
    component: ChuusenInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuusenInfoPageRoutingModule {}

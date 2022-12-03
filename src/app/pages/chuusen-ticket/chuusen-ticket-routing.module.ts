import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChuusenTicketPage } from './chuusen-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: ChuusenTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuusenTicketPageRoutingModule {}

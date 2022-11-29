import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChuusenPage } from './create-chuusen.page';

const routes: Routes = [
  {
    path: '',
    component: CreateChuusenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateChuusenPageRoutingModule {}

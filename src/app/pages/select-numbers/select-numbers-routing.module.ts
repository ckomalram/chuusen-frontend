import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectNumbersPage } from './select-numbers.page';

const routes: Routes = [
  {
    path: '',
    component: SelectNumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectNumbersPageRoutingModule {}

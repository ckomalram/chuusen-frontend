import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'select-numbers',
        loadChildren: () => import('../select-numbers/select-numbers.module').then(m => m.SelectNumbersPageModule)
      },
      {
        path: 'create-chuusen',
        loadChildren: () => import('../create-chuusen/create-chuusen.module').then(m => m.CreateChuusenPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

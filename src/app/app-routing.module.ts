import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'select-numbers',
    loadChildren: () => import('./pages/select-numbers/select-numbers.module').then( m => m.SelectNumbersPageModule)
  },
  {
    path: 'create-chuusen',
    loadChildren: () => import('./pages/create-chuusen/create-chuusen.module').then( m => m.CreateChuusenPageModule)
  },  {
    path: 'chuusen-info',
    loadChildren: () => import('./pages/chuusen-info/chuusen-info.module').then( m => m.ChuusenInfoPageModule)
  },
  {
    path: 'chuusen-reserve',
    loadChildren: () => import('./pages/chuusen-reserve/chuusen-reserve.module').then( m => m.ChuusenReservePageModule)
  },
  {
    path: 'chuusen-confirm',
    loadChildren: () => import('./pages/chuusen-confirm/chuusen-confirm.module').then( m => m.ChuusenConfirmPageModule)
  },
  {
    path: 'chuusen-ticket',
    loadChildren: () => import('./pages/chuusen-ticket/chuusen-ticket.module').then( m => m.ChuusenTicketPageModule)
  },
  {
    path: 'chuusen-winner',
    loadChildren: () => import('./pages/chuusen-winner/chuusen-winner.module').then( m => m.ChuusenWinnerPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

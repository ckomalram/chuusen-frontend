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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

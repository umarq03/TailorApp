import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MainHomePage } from '../main-home/main-home.page';

const routes: Routes = [
  {
    path: 'main-home',
    component: MainHomePage,
    
  },
  {
        path: '',
        redirectTo: '/main-home'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

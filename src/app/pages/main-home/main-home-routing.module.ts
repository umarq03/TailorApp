import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainHomePage } from './main-home.page';

const routes: Routes = [
  {
    path: '',
    component: MainHomePage,

    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: '../schedule/schedule.module#ScheduleModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'main-home/alert',
        pathMatch: 'full'
      }
    ]
  
  }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainHomePageRoutingModule {}

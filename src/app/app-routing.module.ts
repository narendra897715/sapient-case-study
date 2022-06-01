import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },{
  path: '',
  redirectTo: 'timer',
  pathMatch: 'full'
},
  { path: 'dynamic-div', loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) },
  { path: 'list-grid-view', loadChildren: () => import('./list-grid-view/list-grid-view.module').then(m => m.ListGridViewModule) },
  { path: 'student-table', loadChildren: () => import('./student-table/student-table.module').then(m => m.StudentTableModule) },
  { path: 'timer-subject', loadChildren: () => import('./timer-subject/timer-subject.module').then(m => m.TimerSubjectModule) },
  { path: 'floating-banner', loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

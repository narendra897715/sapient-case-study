import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGridViewComponent } from './list-grid-view.component';

const routes: Routes = [{ path: '', component: ListGridViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListGridViewRoutingModule { }

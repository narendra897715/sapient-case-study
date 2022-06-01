import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGridViewRoutingModule } from './list-grid-view-routing.module';
import { ListGridViewComponent } from './list-grid-view.component';


@NgModule({
  declarations: [
    ListGridViewComponent
  ],
  imports: [
    CommonModule,
    ListGridViewRoutingModule
  ]
})
export class ListGridViewModule { }

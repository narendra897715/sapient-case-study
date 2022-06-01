import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTableRoutingModule } from './student-table-routing.module';
import { StudentTableComponent } from './student-table.component';


@NgModule({
  declarations: [
    StudentTableComponent
  ],
  imports: [
    CommonModule,
    StudentTableRoutingModule
  ]
})
export class StudentTableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerSubjectRoutingModule } from './timer-subject-routing.module';
import { TimerSubjectComponent } from './timer-subject.component';
import { CounterSubjectComponent } from './counter-subject/counter-subject.component';
import { ActionsSubjectComponent } from './actions-subject/actions-subject.component';
import { EventsSubjectComponent } from './events-subject/events-subject.component';
import { ClickcountsSubjectComponent } from './clickcounts-subject/clickcounts-subject.component';
import {TimerSubject} from './timer-subject.service';

@NgModule({
  declarations: [
    TimerSubjectComponent,
    CounterSubjectComponent,
    ActionsSubjectComponent,
    EventsSubjectComponent,
    ClickcountsSubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimerSubjectRoutingModule
  ],
  providers: [TimerSubject]
})
export class TimerSubjectModule { }

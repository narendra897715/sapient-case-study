import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { CounterComponent } from './counter/counter.component';
import { ActionsComponent } from './actions/actions.component';
import { EventlogsComponent } from './eventlogs/eventlogs.component';
import { ClickscountsComponent } from './clickscounts/clickscounts.component';


@NgModule({
  declarations: [
    TimerComponent,
    CounterComponent,
    ActionsComponent,
    EventlogsComponent,
    ClickscountsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {ITimerActions} from './timer-subject.interface';
@Injectable({providedIn: 'root'})
export class TimerSubject {
  timerSuject = new Subject();

  starttimer(event : ITimerActions) {
   this.timerSuject.next(event);   
  }

  getTimer() {
      return this.timerSuject;
  }
}
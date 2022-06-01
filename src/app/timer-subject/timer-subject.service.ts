import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class TimerSubject {
  timerSuject = new Subject();

  starttimer(event : any) {
   this.timerSuject.next(event);   
  }

  getTimer() {
      return this.timerSuject;
  }
}
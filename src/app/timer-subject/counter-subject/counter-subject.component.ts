import { Component, OnInit } from '@angular/core';
import {TimerSubject} from '../timer-subject.service';
@Component({
  selector: 'app-counter-subject',
  templateUrl: './counter-subject.component.html',
  styleUrls: ['./counter-subject.component.scss']
})
export class CounterSubjectComponent implements OnInit {

  interval : any;
  newLimit :number = 0;
  initialstart : boolean = true;

  constructor(private timerSubject: TimerSubject) { }


  ngOnInit(): void {
    this.timerSubject.getTimer().subscribe((item: any) => {
      if(item.action == 'pause' ) {
            this.cancelInterval();
          } else if(item.action == 'start'){
            if(this.initialstart) {
              this.newLimit = item.limit;
              this.initialstart = false;
            }
            this.startTimer();
          } else {
            this.cancelInterval();
            this.newLimit = item.limit;
            this.initialstart = true;
          } 
    })
  }

  cancelInterval() {
    if (this.interval) {
    clearInterval(this.interval);
    }
  }

  startTimer() {
    this.cancelInterval();
    this.interval = setInterval(()=> {
      this.newLimit = this.newLimit - 1;
    }, 1000)
  }

}

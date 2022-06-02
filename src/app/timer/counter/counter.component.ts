import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import {ITimerActions} from '../timer.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  interval : any;
  newLimit : number = 0;
  initialstart : boolean = true;
  @Input() timer : ITimerActions;

  ngOnChanges(changes : SimpleChanges) {
    if(changes['timer'].currentValue.action == 'pause' ) {
      this.cancelInterval();
    } else if(changes['timer'].currentValue.action == 'start'){
      if(this.initialstart) {
        this.newLimit = changes['timer'].currentValue.limit;
        this.initialstart = false;
      }
      this.startTimer();
    } else {
      this.cancelInterval();
      this.newLimit = changes['timer'].currentValue.limit;
      this.initialstart = true;
    } 
    
  }

  constructor() { }


  ngOnInit(): void {
    
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

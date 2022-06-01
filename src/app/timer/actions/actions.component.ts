import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ITimerActions} from '../timer.interface';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  limit : number = 0;
  @Output() startOrPauseEvent = new EventEmitter<ITimerActions>();
  start : boolean = true;
  initialStart : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  actionClicked() {
    if(this.start) {
        this.startOrPauseEvent.emit({action: 'start', limit: this.limit});
    } else {
      this.startOrPauseEvent.emit({action: 'pause', limit: this.limit});
    }
    this.start = !this.start;
  }

  resetClicked() {
    this.startOrPauseEvent.emit({action: 'reset', limit: 0});
    this.start;
  }

}

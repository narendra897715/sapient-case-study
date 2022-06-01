import { Component, OnInit } from '@angular/core';
import {ITimerActions} from './timer.interface';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  limitReceived : ITimerActions = {action: "reset", limit: 0};
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(event : ITimerActions) {
   this.limitReceived = event;
  }

}

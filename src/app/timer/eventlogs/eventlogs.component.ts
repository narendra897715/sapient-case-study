import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {ITimerActions} from '../timer.interface';
export interface Imessage {
  message : string
}
@Component({
  selector: 'app-eventlogs',
  templateUrl: './eventlogs.component.html',
  styleUrls: ['./eventlogs.component.scss']
})
export class EventlogsComponent implements OnInit {
  logsArray : Imessage[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  @Input() timer : ITimerActions;

  ngOnChanges(changes : SimpleChanges) {
    let currentdateandtime = new Date().toLocaleString(),
    currentElement = changes['timer'].currentValue.action;
    if(currentElement == 'pause') {
      this.logsArray.push({message: `paused at ${currentdateandtime}`})
    } else if(currentElement == 'start') {
      this.logsArray.push({message: `started at ${currentdateandtime}`})
    } else {
      this.logsArray.push({message: `reset at ${currentdateandtime}`})
    }
    
  }

}

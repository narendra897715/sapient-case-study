import { Component, OnInit } from '@angular/core';
import {TimerSubject} from '../timer-subject.service';
import {ITimerActions} from '../timer-subject.interface';
export interface Imessage {
  message : string
}
@Component({
  selector: 'app-events-subject',
  templateUrl: './events-subject.component.html',
  styleUrls: ['./events-subject.component.scss']
})
export class EventsSubjectComponent implements OnInit {

  logsArray : Imessage[] = [];
  constructor(private timerSubject: TimerSubject) { }

  ngOnInit() {
    this.timerSubject.getTimer().subscribe((item : any) => {
      let currentdateandtime = new Date().toLocaleString();
    if(item.action == 'pause') {
      this.logsArray.push({message: `paused at ${currentdateandtime}`})
    } else if(item.action == 'start') {
      this.logsArray.push({message: `started at ${currentdateandtime}`})
    } else {
      this.logsArray.push({message: `reset at ${currentdateandtime}`})
    }
    })
  }


}

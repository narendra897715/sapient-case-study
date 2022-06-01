import { Component, OnInit } from '@angular/core';
import {TimerSubject} from '../timer-subject.service';
@Component({
  selector: 'app-events-subject',
  templateUrl: './events-subject.component.html',
  styleUrls: ['./events-subject.component.scss']
})
export class EventsSubjectComponent implements OnInit {

  logsArray : any[] = [];
  constructor(private timerSubject: TimerSubject) { }

  ngOnInit(): void {
    this.timerSubject.getTimer().subscribe((item: any) => {
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

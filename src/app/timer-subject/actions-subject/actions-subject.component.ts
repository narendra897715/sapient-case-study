import { Component, OnInit } from '@angular/core';
import {TimerSubject} from '../timer-subject.service';
@Component({
  selector: 'app-actions-subject',
  templateUrl: './actions-subject.component.html',
  styleUrls: ['./actions-subject.component.scss']
})
export class ActionsSubjectComponent implements OnInit {

  limit : number = 0;
  start : boolean = true;
  initialStart : boolean = true;
  constructor(private timerSubject: TimerSubject) { }

  ngOnInit(): void {
  }

  actionClicked() {
    if(this.start) {
        this.timerSubject.starttimer({action: 'start', limit: this.limit});
    } else {
      this.timerSubject.starttimer({action: 'pause', limit: this.limit});
    }
    this.start = !this.start;
  }

  resetClicked() {
    this.timerSubject.starttimer({action: 'reset', limit: 0});
    this.start;
  }

}

import { Component, OnInit } from '@angular/core';
import {TimerSubject} from '../timer-subject.service';
@Component({
  selector: 'app-clickcounts-subject',
  templateUrl: './clickcounts-subject.component.html',
  styleUrls: ['./clickcounts-subject.component.scss']
})
export class ClickcountsSubjectComponent implements OnInit {
  startCount : number = 0;
  pauseCount : number = 0;
  constructor(private timerSubject: TimerSubject) { }

  ngOnInit(): void {
    this.timerSubject.getTimer().subscribe((item: any) => {
      if(item.action == 'pause') {
        this.pauseCount = this.pauseCount + 1;
      } else if(item.action == 'start') {
       this.startCount = this.startCount + 1;
      }
    })
   
  }

}

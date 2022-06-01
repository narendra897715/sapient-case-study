import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clickscounts',
  templateUrl: './clickscounts.component.html',
  styleUrls: ['./clickscounts.component.scss']
})
export class ClickscountsComponent implements OnInit {
 startCount : number = 0;
 pauseCount : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
 
  @Input() timer : any;

  ngOnChanges(changes : SimpleChanges) {
    if(changes['timer'].currentValue.action == 'pause') {
      this.pauseCount = this.pauseCount + 1;
    } else if(changes['timer'].currentValue.action == 'start') {
     this.startCount = this.startCount + 1;
    }
    
  }
}

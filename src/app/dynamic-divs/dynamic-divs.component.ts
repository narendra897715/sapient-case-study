import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-divs',
  templateUrl: './dynamic-divs.component.html',
  styleUrls: ['./dynamic-divs.component.scss']
})
export class DynamicDivsComponent implements OnInit {
  
  dynamicDivsArray = [1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
onScroll(): void {
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  let length = this.dynamicDivsArray.length;
  let lastitem = this.dynamicDivsArray[length - 1];
  this.dynamicDivsArray.push(lastitem + 1);
    }
}

buttonClicked(event: any) {
  alert(event.target.innerText + "is clicked")
}
}

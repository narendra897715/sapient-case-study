import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-grid-view',
  templateUrl: './list-grid-view.component.html',
  styleUrls: ['./list-grid-view.component.scss']
})
export class ListGridViewComponent implements OnInit {
  @ViewChild('container') container : ElementRef<any>;
  gridView : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  productsData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  listView() {
    this.container.nativeElement.children[0].classList.add('active');
    this.container.nativeElement.children[1].classList.remove('active');
    this.gridView = false;
  }
  gridViewClicked() {
    this.container.nativeElement.children[1].classList.add('active');
    this.container.nativeElement.children[0].classList.remove('active');
    this.gridView = true;
  }
}

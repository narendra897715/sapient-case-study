import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grid-view',
  templateUrl: './list-grid-view.component.html',
  styleUrls: ['./list-grid-view.component.scss']
})
export class ListGridViewComponent implements OnInit {
  gridView : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  productsData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  listView() {
    this.gridView = false;
  }
  gridViewClicked() {
    this.gridView = true;
  }
}

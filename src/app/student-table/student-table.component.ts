import { Component, OnInit } from '@angular/core';
import studentData from './student.json';
import {Istudents, IcolumnNames} from './students.interface';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  columnSortClickCount :  number = 0;
  currentColName : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  students : any[] = studentData[0].data;
  originalStudentsData = JSON.parse(JSON.stringify(this.students));
    columns : IcolumnNames[] = studentData[0].columns;

  sort(colDetails: any) {
    let colname = colDetails.columnName;
    if(colname === this.currentColName) {
      this.columnSortClickCount = this.columnSortClickCount + 1;
      if(this.columnSortClickCount == 2) {
        if(colDetails.type == "string") {
          this.students.sort((a,b) => (a[colname] > b[colname]) ? 1 : ((b[colname]> a[colname]) ? -1 : 0))
        } else {
          this.students.sort(function(a, b) {
            return b[colname] - a[colname]
          });
        }
       
      } else if(this.columnSortClickCount == 3) {
        this.students = JSON.parse(JSON.stringify(this.originalStudentsData));
        this.columnSortClickCount = 0;
        this.currentColName = '';
      }
     
    } else {
      if(colDetails.type == "string") {
        this.students.sort((a,b) => (b[colname] > a[colname]) ? 1 : ((a[colname]> b[colname]) ? -1 : 0))
      } else {
        this.students.sort(function(a, b) {
          return a[colname] - b[colname]
        });
      }
     
      this.columnSortClickCount = this.columnSortClickCount + 1;
      this.currentColName = colname;
    }

  }

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: 'app/students/course-list/course-list.component.html',
  styleUrls: ['app/students/course-list/course-list.component.css']
})
export class CourseListComponent{
  constructor(){

  }
  @Input() count:number;
  ngOnInit(){

  }
}

import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {Course} from '../models/course.model.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private service: CourseServiceClient) {
    document.body.style.backgroundColor = '#eeeeee';
  }

  courses: Course[] = [];

  ngOnInit() {
    this.service.findAllCourses()
      .then((courses) => {this.courses = courses});
  }

}

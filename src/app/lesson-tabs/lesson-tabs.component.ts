import {Component, OnInit} from '@angular/core';
import {Lesson} from '../models/lesson.model.client';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.loadLessons(params));

  }

  courseId: number;
  moduleId: number;
  lessons: Lesson[] = [];
  selectedLessonId: number;

  loadLessons(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    if (this.moduleId != null) {
      this.service.findLessonsForModule(this.moduleId)
        .then((lessons) => {
          this.lessons = lessons;
          if (params['lessonId'] == null) {
            this.selectedLessonId = -1;
          } else {
            this.selectedLessonId = params['lessonId'];
          }
        });
    }
  }

  ngOnInit() {
  }

}

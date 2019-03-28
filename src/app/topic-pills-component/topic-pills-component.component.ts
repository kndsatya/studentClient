import {Component, OnInit} from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';
import {Lesson} from '../models/lesson.model.client';
import {Topic} from '../models/topic.model.client';
import {TopicServiceClient} from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  constructor(private service: TopicServiceClient, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.loadTopics(params));

  }

  courseId: number;
  moduleId: number;
  lessonId: number;
  topics: Topic[] = [];
  selectedTopicId: number;

  loadTopics(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    if (this.lessonId != null) {
      this.service.findTopicsForLesson(this.lessonId)
        .then((topics) => {
          this.topics = topics;
          if (params['topicId'] == null) {
            this.selectedTopicId = -1;
          } else {
            this.selectedTopicId = params['topicId'];
          }
        });
    }
  }

  ngOnInit() {
  }

}

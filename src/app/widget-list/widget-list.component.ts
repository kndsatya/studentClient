import {Component, OnInit} from '@angular/core';
import {TopicServiceClient} from '../services/TopicServiceClient';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../models/topic.model.client';
import {Widget} from '../models/widget.model.client';
import {WidgetServiceClient} from '../services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {


  constructor(private service: WidgetServiceClient, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.loadWidgets(params));

  }

  courseId: number;
  moduleId: number;
  lessonId: number;
  topicId: number;
  widgets: Widget[] = [];
  selectedTopicId: number;

  loadWidgets(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];

    if (this.topicId != null) {
      this.service.findWidgetsForTopic(this.topicId)
        .then((widgets) => {
          this.widgets = widgets;
        });
    }
  }

  ngOnInit() {
  }

}

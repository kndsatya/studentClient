import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/CourseServiceClient';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {Module} from '../models/module.model.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) {

    this.route.params.subscribe(params => this.loadModules(params['courseId'], params['moduleId']));

  }

  courseId: number;
  modules: Module[] = [];
  selectedModuleId: number;

  loadModules(courseId, moduleId) {
    this.courseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then((modules) => {
        this.modules = modules;
        if (moduleId == null) {
          this.selectedModuleId = -1;
        } else {
          this.selectedModuleId = moduleId;
        }
      });
  }

  ngOnInit() {
  }

}

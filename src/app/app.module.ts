import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import {routing} from './app.routing';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import {TopicServiceClient} from './services/TopicServiceClient';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponentComponent,
    WidgetListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent, CourseGridComponent, CourseViewerComponent]
})
export class AppModule { }

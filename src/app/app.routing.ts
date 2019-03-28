import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'course', pathMatch: 'full'},
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:courseId/module', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseViewerComponent},
  {path: '**', component: CourseGridComponent}
];

export const routing = RouterModule.forRoot(appRoutes);



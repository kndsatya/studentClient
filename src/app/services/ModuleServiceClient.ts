export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8081/api/courses/COURSE_ID/modules';

  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }

  findAllModules() {
    return fetch('http://localhost:8081/api/modules')
      .then(response => response.json());
  }

  findModuleById(moduleId) {

    return fetch('http://localhost:8081/api/modules/' + moduleId)
      .then(response => response.json());
  }
}

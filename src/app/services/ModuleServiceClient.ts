export class ModuleServiceClient {
  MODULE_URL = 'https://lit-temple-21288.herokuapp.com/api/courses/COURSE_ID/modules';

  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }

  findAllModules() {
    return fetch('https://lit-temple-21288.herokuapp.com/api/modules')
      .then(response => response.json());
  }

  findModuleById(moduleId) {

    return fetch('https://lit-temple-21288.herokuapp.com/api/modules/' + moduleId)
      .then(response => response.json());
  }
}

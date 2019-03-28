export class LessonServiceClient {


  findLessonsForModule(moduleId) {
    return fetch('http://localhost:8081/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}

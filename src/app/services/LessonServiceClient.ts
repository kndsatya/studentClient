export class LessonServiceClient {


  findLessonsForModule(moduleId) {
    return fetch('http://localhost:8081/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllLessons() {
    return fetch('http://localhost:8081/api/lesson')
      .then(response => response.json());
  }

  findLessonById(lessonId) {

    return fetch('http://localhost:8081/api/lesson/' + lessonId)
      .then(response => response.json());
  }
}

export class LessonServiceClient {


  findLessonsForModule(moduleId) {
    return fetch('https://lit-temple-21288.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllLessons() {
    return fetch('https://lit-temple-21288.herokuapp.com/api/lesson')
      .then(response => response.json());
  }

  findLessonById(lessonId) {

    return fetch('https://lit-temple-21288.herokuapp.com/api/lesson/' + lessonId)
      .then(response => response.json());
  }
}

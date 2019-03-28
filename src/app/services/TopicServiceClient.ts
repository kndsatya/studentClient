export class TopicServiceClient {


  findTopicsForLesson(lessonId) {
    return fetch('http://localhost:8081/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}

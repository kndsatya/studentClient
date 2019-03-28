export class TopicServiceClient {


  findTopicsForLesson(lessonId) {
    return fetch('http://localhost:8081/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllTopics() {
    return fetch('http://localhost:8081/api/topic')
      .then(response => response.json());
  }

  findTopicById(topicId) {

    return fetch('http://localhost:8081/api/topic/' + topicId)
      .then(response => response.json());
  }
}

export class TopicServiceClient {


  findTopicsForLesson(lessonId) {
    return fetch('https://lit-temple-21288.herokuapp.com/api/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }

  findAllTopics() {
    return fetch('https://lit-temple-21288.herokuapp.com/api/topic')
      .then(response => response.json());
  }

  findTopicById(topicId) {

    return fetch('https://lit-temple-21288.herokuapp.com/api/topic/' + topicId)
      .then(response => response.json());
  }
}

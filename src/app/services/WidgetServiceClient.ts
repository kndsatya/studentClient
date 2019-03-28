export class WidgetServiceClient {


  findWidgetsForTopic(topicId) {
    return fetch('http://localhost:8081/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}

export class WidgetServiceClient {


  findWidgetsForTopic(topicId) {
    return fetch('http://localhost:8081/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
  findAllWidgets() {
    return fetch('http://localhost:8081/api/widget')
      .then(response => response.json());
  }

  findWidgetById(widgetId) {

    return fetch('http://localhost:8081/api/widget/' + widgetId)
      .then(response => response.json());
  }
}

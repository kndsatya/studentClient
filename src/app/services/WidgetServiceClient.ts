export class WidgetServiceClient {


  findWidgetsForTopic(topicId) {
    return fetch('https://lit-temple-21288.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
  findAllWidgets() {
    return fetch('https://lit-temple-21288.herokuapp.com/api/widget')
      .then(response => response.json());
  }

  findWidgetById(widgetId) {

    return fetch('https://lit-temple-21288.herokuapp.com/api/widget/' + widgetId)
      .then(response => response.json());
  }
}

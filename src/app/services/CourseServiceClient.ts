export class CourseServiceClient {

  COURSE_URL = 'https://lit-temple-21288.herokuapp.com/api/courses';

  findAllCourses = () => {
    return fetch(this.COURSE_URL)
      .then( response => response.json());
  }

  findCourseById = (courseId) => {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }



}

export class CourseServiceClient {

  COURSE_URL = 'http://localhost:8081/api/courses';

  findAllCourses = () => {
    return fetch(this.COURSE_URL)
      .then( response => response.json());
  }

  findCourseById = (courseId) => {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }



}

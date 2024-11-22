import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import FacultyRestrictedRoute from "../FacultyRestrictedRoute";
import StudentRoute from "./StudentRoute";
import { useEffect, useState } from "react";
import { setEnrollments, enrollCourse, unenrollCourse } from "./reducer";
import * as enrollmentsClient from "./client";

export default function Dashboard({
  courses,
  course,
  allCourses,
  setAll,
  setCourse,
  setCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  allCourses: any[];
  setAll: (allCourses: any) => void;
  setCourse: (course: any) => void;
  setCourses: (courses: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false);
  const toggleShowCourses = () => {
    setShowAll(!showAll);
  };

  const enroll = async (courseId: string) => {
    const newCourses = await enrollmentsClient.enrollCourse(courseId);
    dispatch(enrollCourse({ user: currentUser._id, course: courseId }));
    setCourses(newCourses);
  };

  const unenroll = async (courseID: string) => {
    const newCourses = await enrollmentsClient.unenrollCourse(courseID);
    dispatch(unenrollCourse({ user: currentUser._id, course: courseID }));
    setCourses(newCourses);
  };
  const displaycourses = showAll ? allCourses : courses;

  useEffect(() => {
    dispatch(setEnrollments(courses));
  }, []);
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <hr />
      <FacultyRestrictedRoute>
        <h5>
          New Course
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5>
        <br />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
        <hr />
      </FacultyRestrictedRoute>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <StudentRoute>
        <div>
          <button
            className="btn btn-primary float-end"
            onClick={toggleShowCourses}
          >
            Enrollment
          </button>
        </div>
      </StudentRoute>
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displaycourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/images/reactjs.jpg"
                    width="100%"
                    height={160}
                    alt="Course"
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary"> Go </button>
                    <FacultyRestrictedRoute>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                    </FacultyRestrictedRoute>
                    <StudentRoute>
                      {(courses || []).some(
                        (enrollment: any) => enrollment._id === course._id
                      ) ? (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            unenroll(course._id);
                          }}
                          className="btn btn-danger float-end"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            enroll(course._id);
                          }}
                          className="btn btn-success float-end"
                        >
                          Enroll
                        </button>
                      )}
                    </StudentRoute>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-lg-block"
    >
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item border border-0 ${
          pathname.includes("/Home") ? "active" : ""
        }`}
      >
        Home
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/Modules") ? "active" : ""
        }`}
      >
        {" "}
        Modules{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/Piazza") ? "active" : ""
        }`}
      >
        {" "}
        Piazza{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/Zoom") ? "active" : ""
        }`}
      >
        {" "}
        Zoom{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-quizzes-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/Assignments") ? "active" : ""
        }`}
      >
        {" "}
        Assignments{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-assignments-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/Quizzes") ? "active" : ""
        }`}
      >
        {" "}
        Quizzes{" "}
      </Link>
      <br />
      <Link
        to="/Kanbas/Courses/:cid/People"
        id="wd-course-people-link"
        className={`list-group-item text-danger border border-0 ${
          pathname.includes("/People") ? "active" : ""
        }`}
      >
        People
      </Link>
      <br />
    </div>
  );
}

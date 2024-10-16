import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { name: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { name: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { name: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { name: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { name: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { name: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { name: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { name: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];
  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-lg-block"
    >
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(`${link.path}`) ? "active" : ""
          }`}
        >
          {link.name}
          <br />
        </Link>
      ))}
    </div>
  );
}

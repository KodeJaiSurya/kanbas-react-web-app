import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ExamTypeControl from "./ExamTypeControl";
import { GrDocumentText } from "react-icons/gr";

export default function Assignments() {
  return (
    <div
      id="wd-assignments"
      style={{ marginLeft: "30px", marginRight: "30px" }}
    >
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <ExamTypeControl />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrDocumentText className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fs-6"
                  href="#/Kanbas/Courses/1234/Assignments/1"
                >
                  A1 - ENV + HTML
                </a>

                <p className="wd-assignment-text fs-6">
                  Multiple Modules | <b>Not available until</b> May 6 at 12:00am
                  |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100pts
                </p>
              </div>
              <LessonControlButtons />
            </li>

            <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrDocumentText className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fs-6"
                  href="#/Kanbas/Courses/1234/Assignments/2"
                >
                  A2 - CSS + BOOTSTRAP
                </a>

                <p className="wd-assignment-text fs-6">
                  Multiple Modules | <b>Not available until</b> May 13 at
                  12:00am |
                  <br />
                  <b>Due</b> May 20 at 11:59pm | 100pts
                </p>
              </div>
              <LessonControlButtons />
            </li>

            <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <GrDocumentText className="me-2 fs-3" />
              <div>
                <a
                  className="wd-assignment-link fs-6"
                  href="#/Kanbas/Courses/1234/Assignments/3"
                >
                  A3 - JAVASCRIPT + REACT
                </a>

                <p className="wd-assignment-text fs-6">
                  Multiple Modules | <b>Not available until</b> May 20 at
                  12:00am |
                  <br />
                  <b>Due</b> May 27 at 11:59pm | 100pts
                </p>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

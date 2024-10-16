import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ExamTypeControl from "./ExamTypeControl";
import { GrDocumentText } from "react-icons/gr";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignment = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
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
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <ExamTypeControl />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <GrDocumentText className="me-2 fs-3" />
                  <div>
                    <a
                      className="wd-assignment-link fs-6"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </a>

                    <p className="wd-assignment-text fs-6">
                      Multiple Modules | <b>Not available until</b>{" "}
                      {assignment.availableDate} at 12:00am |
                      <br />
                      <b>Due</b> {assignment.dueDate} at 11:59pm |{" "}
                      {assignment.points}pts
                    </p>
                  </div>
                  <LessonControlButtons />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

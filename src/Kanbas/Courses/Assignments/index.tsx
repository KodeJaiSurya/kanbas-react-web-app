import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../../store";
import { deleteAssignment } from "./reducer";
import { Link } from "react-router-dom";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";

export default function Assignments() {
  const { cid } = useParams();
  const assignmentList = useSelector(
    (state: state) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const delAssignment = (aID: string) => {
    const dialog = window.confirm(
      "Are you sure you want to delete this Assignment?"
    );
    if (dialog) {
      dispatch(deleteAssignment(aID));
    }
  };

  return (
    <div
      id="wd-assignments"
      style={{ marginLeft: "30px", marginRight: "30px" }}
    >
      <div id="wd-assign-controls" className="text-nowrap">
        <FacultyRestrictedRoute>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/Editor`}>
            <button
              id="wd-add-assignment-btn"
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={() => {}}
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </button>
          </Link>
          <button
            id="wd-add-group-btn"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
        </FacultyRestrictedRoute>
        <div
          id="wd-search-assignment"
          className="input-group border border-black flex-box ms-2 mt-4"
          style={{ width: "250px", height: "45px" }}
        >
          <span className="input-group-text bg-white border-0">
            <IoMdSearch />
          </span>
          <input
            type="text"
            className="border-0"
            placeholder="Search..."
            style={{ width: "209px" }}
          />
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <div className="d-flex align-items-center float-end">
              <div
                className="border rounded-pill border-black fs-6"
                style={{ paddingLeft: "4px", paddingRight: "4px" }}
              >
                40% of Total
              </div>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignmentList
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

                  <FacultyRestrictedRoute>
                    <FaTrash
                      className="text-danger me-2 mb-1"
                      onClick={() => delAssignment(assignment._id)}
                    />
                  </FacultyRestrictedRoute>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

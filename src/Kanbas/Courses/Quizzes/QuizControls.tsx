import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { useParams, useNavigate } from "react-router";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const qid = "new";
  return (
    <div id="wd-quizzes-controls" className="text-nowrap">
      <FacultyRestrictedRoute>
        <button
          id="wd-context-menu-quiz"
          className="btn btn-lg list-assignment-progress me-1 float-end"
        >
          <IoEllipsisVertical className="fs-4" />
        </button>
        <button
          id="wd-add-quiz-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          onClick={() => {
            navigate(`/Kanbas/Courses/${cid}/Quizzes/Editor`);
          }}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </button>
      </FacultyRestrictedRoute>
      <div id="wd-view-progress" className="btn-group">
        <div className="input-group">
          <span className="input-group-text">
            <CiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Quiz"
          />
        </div>
      </div>
    </div>
  );
}

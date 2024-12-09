import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import { updateQuiz, deleteQuiz } from "./reducer";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";
import { MdDoNotDisturb, MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function QuizControlButtons({
  quiz,
  deleteQuiz,
}: {
  quiz: any;
  deleteQuiz: (quizId: string) => void;
}) {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const togglePublish = async () => {
    const updatedQuiz = {
      ...quiz,
      published: !quiz.published,
      course: cid,
    };
    await quizzesClient.updateQuiz(updatedQuiz);
    dispatch(updateQuiz(updatedQuiz));
  };
  const renderPublishButtonText = () =>
    quiz.published ? "Unpublish" : "Publish";
  const renderPublishStatus = () =>
    quiz.published ? <GreenCheckmark /> : <MdDoNotDisturb />;

  return (
    <div className="d-flex float-end border-0 flex-end">
      <FacultyRestrictedRoute>
        <div>{renderPublishStatus()}</div>
        <div className="dropdown d-inline">
          <button
            className="btn btn-white btn-lg"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IoEllipsisVertical className="fs-4" />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() =>
                  navigate(`/Kanbas/Courses/${cid}/Quizzes/${quiz.id}`)
                }
              >
                <MdOutlineEdit className="text-primary me-2" />
                Edit
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target={`#wd-delete-${quiz.id}-dialog`}
                onClick={() => deleteQuiz(quiz.id)}
              >
                <FaTrash className="text-danger me-2" />
                Delete
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={togglePublish}>
                {quiz.published ? (
                  <MdDoNotDisturb className="text-danger me-2" />
                ) : (
                  <GreenCheckmark />
                )}
                {renderPublishButtonText()}
              </button>
            </li>
          </ul>
        </div>
      </FacultyRestrictedRoute>
    </div>
  );
}

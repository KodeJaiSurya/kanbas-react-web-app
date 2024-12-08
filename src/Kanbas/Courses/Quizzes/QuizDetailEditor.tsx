import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const quizTypes = [
  "Graded Quiz",
  "Practice Quiz",
  "Graded Survey",
  "Ungraded Survey",
];
const assignmentGroups = ["Quizzes", "Exams", "Assignments", "Project"];

const QuizDetailsEditor: React.FC = () => {
  const { qid } = useParams();
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [quiz, setQuiz] = useState(
    foundQuiz || {
      title: "",
      quizType: "Graded Quiz",
      points: 0,
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimit: 20,
      multipleAttempts: false,
      numberOfAttempts: 1,
      showCorrectAnswers: true,
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "",
      availableDate: "",
      untilDate: "",
    }
  );

  const handleInputChange = (field: string, value: any) => {
    setQuiz((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow">
        <div className="card-header bg-white">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "details" ? "active" : ""
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "questions" ? "active" : ""
                }`}
                onClick={() => setActiveTab("questions")}
              >
                Questions
              </button>
            </li>
          </ul>
        </div>

        {activeTab === "details" && (
          <div className="card-body">
            <h2 className="card-title mb-4">Quiz Details</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={quiz.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Quiz Type</label>
                  <select
                    className="form-select"
                    value={quiz.quizType}
                    onChange={(e) =>
                      handleInputChange("quizType", e.target.value)
                    }
                  >
                    {quizTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Assignment Group</label>
                  <select
                    className="form-select"
                    value={quiz.assignmentGroup}
                    onChange={(e) =>
                      handleInputChange("assignmentGroup", e.target.value)
                    }
                  >
                    {assignmentGroups.map((group) => (
                      <option key={group} value={group}>
                        {group}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Time Limit (Minutes)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={quiz.timeLimit}
                    onChange={(e) =>
                      handleInputChange("timeLimit", parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Points</label>
                  <input
                    type="number"
                    className="form-control"
                    value={quiz.points}
                    onChange={(e) =>
                      handleInputChange("points", parseInt(e.target.value))
                    }
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="shuffleAnswers"
                    checked={quiz.shuffleAnswers}
                    onChange={(e) =>
                      handleInputChange("shuffleAnswers", e.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="shuffleAnswers">
                    Shuffle Answers
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="multipleAttempts"
                    checked={quiz.multipleAttempts}
                    onChange={(e) =>
                      handleInputChange("multipleAttempts", e.target.checked)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="multipleAttempts"
                  >
                    Multiple Attempts
                  </label>
                </div>

                {quiz.multipleAttempts && (
                  <div className="ms-4 mb-2">
                    <label className="form-label">Number of Attempts</label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: "120px" }}
                      value={quiz.numberOfAttempts}
                      onChange={(e) =>
                        handleInputChange(
                          "numberOfAttempts",
                          parseInt(e.target.value)
                        )
                      }
                      min={1}
                    />
                  </div>
                )}

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="oneQuestionAtATime"
                    checked={quiz.oneQuestionAtATime}
                    onChange={(e) =>
                      handleInputChange("oneQuestionAtATime", e.target.checked)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="oneQuestionAtATime"
                  >
                    One Question at a Time
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="webcamRequired"
                    checked={quiz.webcamRequired}
                    onChange={(e) =>
                      handleInputChange("webcamRequired", e.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="webcamRequired">
                    Webcam Required
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="lockQuestions"
                    checked={quiz.lockQuestionsAfterAnswering}
                    onChange={(e) =>
                      handleInputChange(
                        "lockQuestionsAfterAnswering",
                        e.target.checked
                      )
                    }
                  />
                  <label className="form-check-label" htmlFor="lockQuestions">
                    Lock Questions After Answering
                  </label>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Due Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={quiz.dueDate}
                    onChange={(e) =>
                      handleInputChange("dueDate", e.target.value)
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Available From</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={quiz.availableDate}
                    onChange={(e) =>
                      handleInputChange("availableDate", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Available Until</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={quiz.untilDate}
                  onChange={(e) =>
                    handleInputChange("untilDate", e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Access Code (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  value={quiz.accessCode}
                  onChange={(e) =>
                    handleInputChange("accessCode", e.target.value)
                  }
                  placeholder="Leave blank for no access code"
                />
              </div>

              <div className="d-flex justify-content-end gap-2 border-top pt-3">
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
                  }}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert("Save not implemented");
                  }}
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert("Save and Publish not implemented");
                  }}
                  className="btn btn-success"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "questions" && (
          <div className="card-body">
            <p className="text-muted">
              Questions editor will be implemented separately
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetailsEditor;

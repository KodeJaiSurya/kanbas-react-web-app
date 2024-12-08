import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const QuizDetailsScreen: React.FC = () => {
  const { qid } = useParams();
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((quiz: any) => quiz._id === qid);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser.role;
  const navigate = useNavigate();
  return (
    <div className="container-fluid p-4 bg-light">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="mb-0 fs-4">{quiz.title}</h2>
            </div>
            <div className="button-group">
              {userRole === "FACULTY" ? (
                <div className="d-flex gap-2">
                  <button
                    // onClick={onPreview}
                    className="btn btn-outline-primary"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`);
                    }}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <button
                  // onClick={onStartQuiz}
                  className="btn btn-primary"
                >
                  Start Quiz
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card-body p-4">
          {/* Quiz Info Grid */}
          <div className="row mb-4 g-3">
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Quiz Type</h3>
                <p className="mb-0">{quiz.quizType}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Points</h3>
                <p className="mb-0">{quiz.points}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Assignment Group</h3>
                <p className="mb-0">{quiz.assignmentGroup}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Time Limit</h3>
                <p className="mb-0">{quiz.timeLimit} Minutes</p>
              </div>
            </div>
          </div>

          {/* Settings and Dates */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">Settings</h3>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Shuffle Answers</span>
                      <span>{quiz.shuffleAnswers ? "Yes" : "No"}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Multiple Attempts</span>
                      <span>
                        {quiz.multipleAttempts
                          ? `Yes (${quiz.numberOfAttempts} attempts)`
                          : "No"}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">One Question at a Time</span>
                      <span>{quiz.oneQuestionAtATime ? "Yes" : "No"}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom-0">
                      <span className="text-muted">Webcam Required</span>
                      <span>{quiz.webcamRequired ? "Yes" : "No"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title h5 mb-3">Dates</h3>
                  <div className="list-group list-group-flush">
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Due Date</span>
                      <span>
                        {quiz.dueDate
                          ? new Date(quiz.dueDate).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Available From</span>
                      <span>
                        {quiz.availableDate
                          ? new Date(quiz.availableDate).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom-0">
                      <span className="text-muted">Available Until</span>
                      <span>
                        {quiz.untilDate
                          ? new Date(quiz.untilDate).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom-0">
                      <span className="text-muted">For</span>
                      <span>{quiz.forOption}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsScreen;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchQuizById } from './reducer';

const QuizDetailsScreen: React.FC = () => {
  const { qid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get quiz from Redux state
  const quiz = useSelector((state: any) => state.quizzesReducer.currentQuiz);
  const loading = useSelector((state: any) => state.quizzesReducer.loading);
  const error = useSelector((state: any) => state.quizzesReducer.error);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser.role;

  useEffect(() => {
    if (qid) {
      dispatch<any>(fetchQuizById(qid));
    }
  }, [qid, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quiz) return <div>No quiz found</div>;

  return (
    <div className="container-fluid p-4 bg-light">
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2 className="mb-0 fs-4">{quiz.title || 'Quiz Title'}</h2>
            </div>
            <div className="button-group">
              {userRole === 'FACULTY' ? (
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-primary"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit`)}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <button
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
                <p className="mb-0">{quiz.quizType || 'Graded Quiz'}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Points</h3>
                <p className="mb-0">{quiz.points || 0}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Assignment Group</h3>
                <p className="mb-0">{quiz.assignmentGroup || 'Quizzes'}</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Time Limit</h3>
                <p className="mb-0">{quiz.timeLimit || 20} Minutes</p>
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
                      <span>{quiz.shuffleAnswers ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Multiple Attempts</span>
                      <span>
                        {quiz.multipleAttempts ? `Yes (${quiz.numberOfAttempts} attempts)` : 'No'}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">One Question at a Time</span>
                      <span>{quiz.oneQuestionAtATime ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Show Correct Answers</span>
                      <span>{quiz.showCorrectAnswers ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Webcam Required</span>
                      <span>{quiz.webcamRequired ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom-0">
                      <span className="text-muted">Lock Questions After Answering</span>
                      <span>{quiz.lockQuestionsAfterAnswering ? 'Yes' : 'No'}</span>
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
                        {quiz.dueDate ? new Date(quiz.dueDate).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Available From</span>
                      <span>
                        {quiz.availableDate ? new Date(quiz.availableDate).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center px-0 border-bottom-0">
                      <span className="text-muted">Available Until</span>
                      <span>
                        {quiz.untilDate ? new Date(quiz.untilDate).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="p-3 bg-light rounded">
                <h3 className="fs-6 text-muted mb-2">Number of Attempts</h3>
                <p className="mb-0">{quiz.numberOfAttempts || 1}</p>
              </div>
            </div>
            <div>
              <div className="p-3 bg-light rounded mt-3">
                <h3 className="fs-6 text-muted mb-2">Access Code</h3>
                <p className="mb-0">{quiz.accessCode || 'No access code required'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetailsScreen;
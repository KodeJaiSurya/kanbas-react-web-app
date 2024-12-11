import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateQuizField, updateQuiz } from './reducer';
import { Quiz } from './reducer';
import Editor from 'react-simple-wysiwyg';
import { updateQuiz as updateQuizApi } from './client';
// import { RootState } from '.types';
const quizTypes = ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'];
const assignmentGroups = ['Quizzes', 'Exams', 'Assignments', 'Project'];
const QuizDetailsEditor: React.FC = () => {
  const { qid, cid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Access the state from the updated slice
  const quiz = useSelector((state: any) => state.quizzesReducer.currentQuiz);
  const loading = useSelector((state: any) => state.quizzesReducer.loading);
  const error = useSelector((state: any) => state.quizzesReducer.error);  const [activeTab, setActiveTab] = useState('details');
  useEffect(() => {
    if (qid) {
      console.log("fetchQuizById", qid);
    }
    
  }, [qid, dispatch]);
  const handleInputChange = (field: keyof Quiz, value: any) => {
    dispatch(updateQuizField({ field, value }));
  };

  const handleSave = async () => {
    try {
      if (quiz) {
        console.log("updateQuiz", quiz);
        dispatch(updateQuiz(quiz));
      }
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };

  const saveQuiz = () => {
    updateQuizApi(quiz);
    handleSave();
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
  };

  const saveAndPublishQuiz = () => {
    updateQuizApi(quiz);
    handleSave();
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quiz) return <div>No quiz found</div>;
  return (
    <div className="container-fluid mt-4">
      <div className="card shadow"> 
        <div className="card-header bg-white">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'questions' ? 'active' : ''}`}
                onClick={() => setActiveTab('questions')}
              >
                Questions
              </button>
            </li>
          </ul>
        </div>

        {activeTab === 'details' && (
          <div className="card-body">
            <h2 className="card-title mb-4">Quiz Details</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={quiz.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <Editor
                  value={quiz.description}
                  onChange={(e: any) => handleInputChange('description', e.target.value)}
                  containerProps={{
                    style: { minHeight: "100px" },
                    className: "form-control"
                  }}
                  aria-label="Quiz description editor"
                />
              </div>
              <div className="mb-3">
                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="multipleAttempts"
                    checked={quiz.multipleAttempts}
                    onChange={(e) => handleInputChange('multipleAttempts', e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="multipleAttempts">
                    Allow Multiple Attempts
                  </label>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Quiz Type</label>
                  <select
                    className="form-select"
                    value={quiz.quizType}
                    onChange={(e) => handleInputChange('quizType', e.target.value)}
                  >
                    {quizTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Assignment Group</label>
                  <select
                    className="form-select"
                    value={quiz.assignmentGroup}
                    onChange={(e) => handleInputChange('assignmentGroup', e.target.value)}
                  >
                    {assignmentGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
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
                    value={quiz.timeLimit || 20}
                    onChange={(e) => handleInputChange('timeLimit', parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Points</label>
                  <input
                    type="number"
                    className="form-control"
                    value={quiz.points || 20}
                    onChange={(e) => handleInputChange('points', parseInt(e.target.value))}
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
                    onChange={(e) => handleInputChange('shuffleAnswers', e.target.checked)}
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
                    onChange={(e) => handleInputChange('multipleAttempts', e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="multipleAttempts">
                    Multiple Attempts
                  </label>
                </div>

                {quiz.multipleAttempts && (
                  <div className="ms-4 mb-2">
                    <label className="form-label">Number of Attempts</label>
                    <input
                      type="number"
                      className="form-control"
                      style={{ width: '120px' }}
                      value={quiz.numberOfAttempts || 1 }
                      onChange={(e) => handleInputChange('numberOfAttempts', parseInt(e.target.value))}
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
                    onChange={(e) => handleInputChange('oneQuestionAtATime', e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="oneQuestionAtATime">
                    One Question at a Time
                  </label>
                </div>

                <div className="form-check mb-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="webcamRequired"
                    checked={quiz.webcamRequired}
                    onChange={(e) => handleInputChange('webcamRequired', e.target.checked)}
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
                    onChange={(e) => handleInputChange('lockQuestionsAfterAnswering', e.target.checked)}
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
                    onChange={(e) => handleInputChange('dueDate' as keyof Quiz, e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Available From</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={quiz.availableDate}
                    onChange={(e) => handleInputChange('availableDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Available Until</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={quiz.untilDate}
                  onChange={(e) => handleInputChange('untilDate', e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Access Code (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  value={quiz.accessCode}
                  onChange={(e) => handleInputChange('accessCode', e.target.value)}
                  placeholder="Leave blank for no access code"
                />
              </div>

              <div className="d-flex justify-content-end gap-2 border-top pt-3">
                <button
                  type="button"
                  onClick={() => {navigate(`/Kanbas/Courses/${cid}/Quizzes`);}}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveQuiz}
                  className="btn btn-primary"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={saveAndPublishQuiz}
                  className="btn btn-success"
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="card-body">
            <p className="text-muted">Questions editor will be implemented separately</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetailsEditor;
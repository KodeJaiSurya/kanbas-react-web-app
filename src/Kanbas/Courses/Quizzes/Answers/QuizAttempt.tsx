import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as quizzesClient from "../client";
import { setQuestions } from "../Question/reducer";

export default function QuizAttempt() {
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((quiz: any) => quiz._id === qid);
  const { questions } = useSelector((state: any) => state.questionReducer);
  const [answers, setAnswers] = useState(
    questions.map((q: any) => ({ question: q._id, selectedAnswer: null }))
  );
  const [previousAnswers, setPreviousAnswers] = useState<any>([]);

  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  };

  const fetchSubmission = async () => {
    try {
      const userId = currentUser._id;
      const submission = await quizzesClient.getSubmission(qid, userId);
      setPreviousAnswers(submission || { answers: [] });
    } catch (error) {
      console.error("Error fetching submission:", error);
      setPreviousAnswers({ answers: [] });
    }
  };
  const handleAnswerChange = (questionId: any, selectedAnswer: any) => {
    console.log("SelectedAnswer: " + selectedAnswer);
    setAnswers((prev: any) =>
      prev.map((a: any) =>
        a.question === questionId ? { ...a, selectedAnswer } : a
      )
    );
  };

  const handleSubmitQuiz = async () => {
    const userId = currentUser._id;
    await quizzesClient.submitQuiz(qid, { userId, answers });
    alert("Quiz submitted successfully!");
  };

  useEffect(() => {
    if (qid !== "new") {
      fetchQuestions();
      fetchSubmission();
    }
    console.log("Previous Answers: " + previousAnswers);
  }, [answers]);

  const dispatch = useDispatch();

  return (
    <div id="wd-quizzes-editor">
      <div className="wd-title p-3 ps-2 d-flex justify-content-between align-items-center">
        <h3>{quiz.title}</h3>
      </div>

      <hr />

      <div className="d-flex justify-content-center">Quiz Started</div>
      <hr />
      <ul id="wd-modules" className="list-group p-5 rounded-0">
        {questions.map((question: any, index: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {"Question " + (index + 1)}
              <div className="float-end">{"Points: " + question.points}</div>
            </div>
            {/* {module.lessons && ( */}
            <ul className="wd-questions list-group rounded-0">
              {/* {module.lessons.map((lesson: any) => ( */}
              <li className="wd-lesson list-group-item p-3 ps-1">
                {question.description}
                <hr />

                {question.questionType === "Fill in the Blank" ? (
                  <div className="row">
                    <label
                      htmlFor="wd-answer"
                      className="text-end col-sm-4 mt-2 col-form-label"
                    >
                      {"Answer "}
                    </label>

                    <div className="col-sm-6 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your answer"
                        onChange={(e) =>
                          handleAnswerChange(question._id, e.target.value)
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <form>
                    {question.possibleAnswers.map((answer: any) => (
                      <div className="ps-2 col-12">
                        <div
                          className="list-group"
                          id="list-tab"
                          role="tablist"
                        >
                          <div className="form-check">
                            <label
                              key={answer.text}
                              className="form-check-label"
                            >
                              <input
                                className="form-check-input"
                                type="radio"
                                // name="exampleRadios"

                                name={`question-${question._id}`}
                                value={answer.text}
                                // checked={answers.find((a: any) => a.question === question._id)?.selectedAnswer === answer.text || previousAnswer === answer.text}
                                onChange={() =>
                                  handleAnswerChange(question._id, answer.text)
                                }
                              />
                              {answer.text}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </form>
                )}
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <div className="modal-footer">
        <a href={"javascript:history.back()"}>
          <button type="button" className="btn btn-secondary me-2">
            Cancel
          </button>
        </a>
        <a href={`#/Kanbas/Courses/${cid}/Quizzes`}>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleSubmitQuiz}
          >
            Submit Quiz
          </button>
        </a>
      </div>
    </div>
  );
}

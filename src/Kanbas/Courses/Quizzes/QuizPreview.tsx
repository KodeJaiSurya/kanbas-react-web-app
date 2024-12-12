import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import { setQuestions } from "./Question/reducer";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((quiz: any) => quiz._id === qid);

  const { questions } = useSelector((state: any) => state.questionReducer);
  const [answers, setAnswers] = useState(
    questions.map((q: any) => ({ question: q._id, selectedAnswer: null }))
  );
  const [previousAnswers, setPreviousAnswers] = useState<any>([]);
  const [displayPrev, setdisplayPrev] = useState<Boolean>(true);

  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  };

  const fetchSubmission = async () => {
    const userId = currentUser._id;
    const submission = await quizzesClient.getSubmission(qid, userId);
    console.log("Submission: " + submission?.answers);
    setPreviousAnswers(submission || []);
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
        {displayPrev && (
          <div className="float-end">
            <a href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/editor/questions`}>
              <button className="btn btn-lg btn-primary me-1">Edit</button>
            </a>
          </div>
        )}
      </div>

      <hr />

      {displayPrev && (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-danger mb-4 me-4"
            onClick={(e) => setdisplayPrev(!displayPrev)}
          >
            Take Quiz
          </button>
          <h5 className="me-2">
            {"Previous Score: " +
              (previousAnswers?.score !== undefined
                ? previousAnswers.score
                : "Not Attempted")}
          </h5>
          <h5>
            {"Submitted At: " +
              (previousAnswers?.submittedAt !== undefined
                ? previousAnswers.submittedAt
                : "Not Attempted")}
          </h5>
        </div>
      )}
      {!displayPrev && (
        <div className="d-flex justify-content-center">Quiz Started</div>
      )}
      <hr />
      <ul id="wd-modules" className="list-group p-5 rounded-0">
        {previousAnswers?.submittedAt !== undefined && displayPrev
          ? // "Test"
            questions?.map((question: any, index: any) => (
              <li
                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
                key={index}
              >
                <div className="wd-title p-3 ps-2 bg-secondary">
                  {"Question " + (index + 1)}
                  <div className="float-end">
                    {"Points: " + question.points}
                  </div>
                </div>
                <ul className="wd-questions list-group rounded-0">
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    {question.description}
                    <hr />
                    <form>
                      <div className="ps-2 col-12 mb-2">
                        <div>
                          {previousAnswers?.answers?.[index]?.isCorrect ? (
                            <TiTick className="text-success float-end" />
                          ) : previousAnswers?.answers?.[index]?.isCorrect !==
                              undefined &&
                            previousAnswers?.answers?.[index]
                              ?.selectedAnswer !== null ? (
                            <RxCross2 className="text-danger float-end" />
                          ) : (
                            <div></div>
                          )}
                        </div>
                        <div>
                          {"Your Answer: " +
                            (previousAnswers?.answers?.[index]
                              ?.selectedAnswer !== undefined &&
                            previousAnswers?.answers?.[index]
                              ?.selectedAnswer !== null
                              ? previousAnswers?.answers?.[index]
                                  ?.selectedAnswer
                              : "Not Answered")}
                        </div>
                      </div>
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
                                {answer.isCorrect &&
                                  "Correct Answer: " + answer.text}
                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </form>
                  </li>
                </ul>
              </li>
            ))
          : questions.map((question: any, index: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  {"Question " + (index + 1)}
                  <div className="float-end">
                    {"Points: " + question.points}
                  </div>
                </div>
                <ul className="wd-questions list-group rounded-0">
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
                                    name={`question-${question._id}`}
                                    value={answer.text}
                                    onChange={() =>
                                      handleAnswerChange(
                                        question._id,
                                        answer.text
                                      )
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
        {!displayPrev && (
          <a href={"javascript:history.back()"}>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSubmitQuiz}
            >
              Submit Quiz
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

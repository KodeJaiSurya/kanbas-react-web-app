import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as quizzesClient from "../client";
import { setQuestions } from "../Question/reducer";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

export default function PreviousAttempt() {
  const { qid } = useParams();
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
      console.log("Submission score:", submission?.score);
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
    console.log("Previous Answers: " + previousAnswers.score);
  }, [answers]);

  const dispatch = useDispatch();

  return (
    <div id="wd-quizzes-editor">
      <div className="wd-title p-3 ps-2 d-flex justify-content-between align-items-center">
        <h3>{quiz.title}</h3>
      </div>

      <hr />
      <h5>
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

      <hr />
      <ul id="wd-modules" className="list-group p-5 rounded-0">
        {questions.map((question: any, index: any) => (
          <li
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            key={index}
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              {"Question " + (index + 1)}
              <div className="float-end">{"Points: " + question.points}</div>
            </div>
            <ul className="wd-questions list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                {question.description}
                <hr />
                <form>
                  <div className="ps-2 col-12 mb-2">
                    <div className="mb-2">
                      {previousAnswers?.answers?.[index]?.isCorrect ? (
                        <TiTick className="text-success float-end" />
                      ) : previousAnswers?.answers?.[index]?.isCorrect !==
                        null ? (
                        <RxCross2 className="text-danger float-end" />
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div>
                      {"Your Answer: " +
                        (previousAnswers?.answers?.[index]?.selectedAnswer !==
                        undefined
                          ? previousAnswers?.answers?.[index]?.selectedAnswer
                          : "Not Answered")}
                    </div>
                  </div>
                  {question.possibleAnswers.map(
                    (answer: any) =>
                      answer.isCorrect && (
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
                                {"Correct Answer: " + answer.text}
                              </label>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </form>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <div className="modal-footer">
        <a href={"javascript:history.back()"}>
          <button type="button" className="btn btn-secondary me-2">
            Back
          </button>
        </a>
      </div>
    </div>
  );
}

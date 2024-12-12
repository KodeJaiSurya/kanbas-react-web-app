import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as quizzesClient from "../client";
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus, FaTrash } from "react-icons/fa";
import NewQuestionEditor from "./NewQuestion";
import {
  setQuestions,
  deleteQuestion,
  updateQuestion,
  editQuestion,
} from "./reducer";
import * as questionsClient from "./client";

export default function QuestionsEditor() {
  const { cid, qid } = useParams();
  const dispatch = useDispatch();
  const [questionId, setquestionId] = useState("new");
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((quiz: any) => quiz._id === qid);
  const { questions } = useSelector((state: any) => state.questionReducer);
  const delQuestion = async (qID: string) => {
    const dialog = window.confirm(
      "Are you sure you want to delete this Question?"
    );
    if (dialog) {
      await questionsClient.deleteQuestion(qID);
      dispatch(deleteQuestion(qID));
    }
  };

  const fetchQuestions = async () => {
    const questions = await quizzesClient.findQuestionsForQuiz(qid as string);
    dispatch(setQuestions(questions));
  };

  const saveQuestion = async (qs: any) => {
    await questionsClient.updateQuestion(qs);
    dispatch(updateQuestion(qs));
  };

  useEffect(() => {
    if (qid !== "NEW") {
      fetchQuestions();
    }
  }, []);

  return (
    <div id="wd-questions-editor" className="text-nowrap">
      <div className="d-flex justify-content-end">
        {"Points: " + quiz.points}
      </div>
      <hr />

      <div className="container">
        <h5>{quiz.title}</h5>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success "
            onClick={() => setquestionId("NEW")}
            data-bs-toggle="modal"
            data-bs-target="#wd-add-question-dialog"
          >
            <FaPlus />
            Add Question
          </button>
        </div>
      </div>
      <hr />
      <ul id="wd-questions" className="list-group p-5">
        {questions.map((question: any, index: any) => (
          <li className="wd-question list-group-item p-0 mb-5 fs-5">
            <div className="wd-title p-3 ps-2 bg-secondary">
              {"Question " + (index + 1)}

              <div className="float-end">
                <button
                  className="btn btn-blue"
                  onClick={() => dispatch(editQuestion(question._id))}
                >
                  <MdOutlineEdit />
                </button>
                <button
                  className="btn btn-blue"
                  // data-bs-toggle="modal"
                  // data-bs-target={`#wd-delete-${question._id}-dialog`}
                  onClick={() => delQuestion(question._id)}
                >
                  <FaTrash className="text-danger" />
                </button>
              </div>
            </div>
            <ul className="wd-questions list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                {!question.editing && question.description}
                {question.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateQuestion({
                          ...question,
                          description: e.target.value,
                        })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveQuestion({ ...question, editing: false });
                      }
                    }}
                    defaultValue={question.description}
                  />
                )}

                <hr />

                <form>
                  {question.possibleAnswers.map((answer: any, index: any) => (
                    <div className="ps-2 col-12">
                      <div className="list-group" id="list-tab" role="tablist">
                        <div className="form-check">
                          <label key={answer.text} className="form-check-label">
                            {!question.editing &&
                              (answer.isCorrect
                                ? "Correct Answer : "
                                : "Possible Answer : ") + answer.text}
                            {question.editing && (
                              <div>
                                {answer.isCorrect
                                  ? "Correct Answer : "
                                  : "Possible Answer : "}
                                <input
                                  className="form-control w-50 d-inline-block"
                                  onChange={(e) =>
                                    dispatch(
                                      updateQuestion({
                                        ...question,
                                        possibleAnswers:
                                          question.possibleAnswers.map(
                                            (answer: any, i: any) =>
                                              i === index
                                                ? {
                                                    ...answer,
                                                    text: e.target.value,
                                                  }
                                                : answer
                                          ),
                                      })
                                    )
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      saveQuestion({
                                        ...question,
                                        editing: false,
                                      });
                                    }
                                  }}
                                  defaultValue={answer.text}
                                />
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </form>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <div className="d-flex justify-content-end">
        <a href={`#/Kanbas/Courses/${cid}/Quizzes`}>
          <button className="btn btn-secondary me-1">Back</button>
        </a>
      </div>
      <NewQuestionEditor
        questionId={questionId}
        fetchQuestions={fetchQuestions}
      />
    </div>
  );
}

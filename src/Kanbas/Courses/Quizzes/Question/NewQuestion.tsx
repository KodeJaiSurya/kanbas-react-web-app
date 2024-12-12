import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addQuestion } from "./reducer";
import * as quizClient from "../client";
import QMCQEdit from "./QMCQEdit";
import QTFEdit from "./QTFEdit";
import QFBEdit from "./QFBEdit";
const QUESTION_TYPES = {
  MULTIPLE_CHOICE: "Multiple Choice",
  TRUE_FALSE: "True/False",
  FILL_BLANK: "Fill in the Blank",
};
export default function NewQuestion({
  questionId,
  fetchQuestions,
}: {
  questionId: string;
  fetchQuestions: () => void;
}) {
  const { qid } = useParams();
  const dispatch = useDispatch();
  const [questionType, setQuestionType] = useState(
    QUESTION_TYPES.MULTIPLE_CHOICE
  );
  const [points, setPoints] = useState(5);

  const renderQuestionEditor = () => {
    switch (questionType) {
      case QUESTION_TYPES.MULTIPLE_CHOICE:
        return <QMCQEdit />;
      case QUESTION_TYPES.TRUE_FALSE:
        return <QTFEdit />;
      case QUESTION_TYPES.FILL_BLANK:
        return <QFBEdit />;
      default:
        return null;
    }
  };
  return (
    <div
      id="wd-add-question-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between">
            <div className="d-flex flex-grow-1 align-items-center gap-3">
              <select
                className="form-select flex-grow-1"
                onChange={(e) => setQuestionType(e.target.value)}
                value={questionType}
              >
                {Object.values(QUESTION_TYPES).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <label htmlFor="wd-points" className="col-form-label">
                Points
              </label>
              <input
                id="wd-points"
                type="number"
                className="form-control w-auto"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="modal-body">{renderQuestionEditor()}</div>
        </div>
      </div>
    </div>
  );
}

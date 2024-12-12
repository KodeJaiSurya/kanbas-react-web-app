import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as quizzesClient from "../client";
import { addQuestion } from "./reducer";
import { Editor, EditorProvider } from "react-simple-wysiwyg";

export default function QTFEdit() {
  const { qid } = useParams();

  const [type, settype] = useState("True/False");
  const [questionPoints, setquestionPoints] = useState<number>(5);
  const [questionDesc, setquestionDesc] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState([
    { text: "True", isCorrect: false },
    { text: "False", isCorrect: false },
  ]);
  const handleAdd = async () => {
    const newQuestion = {
      questionType: type,
      description: questionDesc,
      points: questionPoints,
      correctAnswer: possibleAnswers.find((a) => a.isCorrect)?.text || "True",
      possibleAnswers: possibleAnswers,
      quiz: qid,
    };
    const question = await quizzesClient.createQuestionForQuiz(
      qid as string,
      newQuestion
    );
    dispatch(addQuestion(question));
  };

  const setCorrectAnswer = (index: number) => {
    setPossibleAnswers((prev) =>
      prev.map((answer, i) => ({
        ...answer,
        isCorrect: i === index,
      }))
    );
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="modal-body">
        <label
          htmlFor="wd-points"
          className="text-start col-sm-2 mt-2 col-form-label"
        >
          {"True/False Question: "}
        </label>
        <EditorProvider>
          <Editor
            className="form-control"
            value={questionDesc}
            onChange={(e) => setquestionDesc(e.target.value)}
            placeholder="Enter a T/F question like Is 1 - 1 = 0?"
          />
        </EditorProvider>
        <label
          htmlFor="wd-points"
          className="text-start col-sm-2 mt-2 col-form-label"
        >
          {"Answer: "}
        </label>
        <div className="row">
          {possibleAnswers.map((answer, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="trueFalse"
                  className="form-check-input ms-4 me-2"
                  checked={answer.isCorrect}
                  onChange={() => setCorrectAnswer(index)}
                />
                {answer.text}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button
          type="button"
          data-bs-dismiss="modal"
          onClick={() => {
            if (!questionDesc || questionPoints <= 0) {
              alert("There are missing fields");
              return;
            }
            handleAdd();
          }}
          className="btn btn-danger"
        >
          Save Question
        </button>
      </div>
    </div>
  );
}

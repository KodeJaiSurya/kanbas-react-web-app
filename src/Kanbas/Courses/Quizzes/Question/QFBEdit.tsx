import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addQuestion } from "./reducer";
import * as quizzesClient from "../client";
import { Editor, EditorProvider } from "react-simple-wysiwyg";

export default function QFBEdit() {
  const { qid } = useParams();

  const [type, settype] = useState("Fill in the Blanks");
  const [questionPoints, setquestionPoints] = useState<number>(5);
  const [questionDesc, setquestionDesc] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState([
    {
      text: "",
      isCorrect: false,
    },
  ]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setPossibleAnswers((prev) =>
      prev.map((answer, i) =>
        i === index
          ? { ...answer, text: e.target.value, isCorrect: true }
          : answer
      )
    );
  };

  const handleAdd = async () => {
    const newQuestion = {
      questionType: type,
      description: questionDesc,
      points: questionPoints,
      correctAnswer: possibleAnswers.map((a) => a.text).join(", "),
      possibleAnswers: possibleAnswers,
      quiz: qid,
    };
    const question = await quizzesClient.createQuestionForQuiz(
      qid as string,
      newQuestion
    );
    dispatch(addQuestion(question));
  };

  const addAnswer = () => {
    setPossibleAnswers((prev) => [...prev, { text: "", isCorrect: false }]);
  };
  const dispatch = useDispatch();

  return (
    <div className="modal-body">
      Fill in the Blanks
      <label
        htmlFor="wd-question"
        className="text-start col-sm-2 mt-2 col-form-label"
      >
        {"Question: "}
      </label>
      <EditorProvider>
        <Editor
          className="form-control"
          value={questionDesc}
          onChange={(e) => setquestionDesc(e.target.value)}
          placeholder="Enter question and a blank like this: '1 + 1 is ___."
        />
      </EditorProvider>
      <label
        htmlFor="wd-answer"
        className="text-start col-sm-2 mt-2 col-form-label"
      >
        {"Answer: "}
      </label>
      <div className="row">
        <label
          htmlFor="wd-answers"
          className="text-end col-sm-4 mt-2 col-form-label"
        >
          {"Correct Answers: "}
        </label>

        {possibleAnswers.map((answer, index) => (
          <div key={index} className="d-flex">
            <input
              className="form-control ms-2"
              type="text"
              value={answer.text}
              onChange={(e) => handleInputChange(e, index)}
            />
          </div>
        ))}

        <button
          className="btn btn-primary mt-4"
          // onClick={() => setqsId("new")
          onClick={addAnswer}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Add Correct Answer
        </button>
      </div>
      <div className="modal-footer mt-4">
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
            if (
              !questionDesc ||
              questionPoints <= 0 ||
              possibleAnswers.every((a) => a.text === "")
            ) {
              alert("There are missing fields");
              return;
            }
            handleAdd();
          }}
          className="btn btn-danger"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}

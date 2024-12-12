import { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

import { useParams } from "react-router";
import * as quizzesClient from "../client";
import { addQuestion, setQuestions } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { Editor, EditorProvider } from "react-simple-wysiwyg";

export default function QMCQEdit() {
  const { qid } = useParams();

  const [type, settype] = useState("Multiple Choice");
  const [questionPoints, setquestionPoints] = useState<number>(5);
  const [questionDesc, setquestionDesc] = useState("");
  const [possibleAnswers, setPossibleAnswers] = useState([
    {
      text: "",
      isCorrect: false,
    },
  ]);

  const { questions } = useSelector((state: any) => state.questionReducer);
  const question = questions.find((question: any) => question._id === qid);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setPossibleAnswers((prev) =>
      prev.map((answer, i) =>
        i === index ? { ...answer, text: e.target.value } : answer
      )
    );
  };

  const addAnswer = () => {
    setPossibleAnswers((prev) => [...prev, { text: "", isCorrect: false }]);
  };

  const removeAnswer = (index: number) => {
    setPossibleAnswers((prev) => prev.filter((_, i) => i !== index));
  };

  const setCorrectAnswer = (index: number) => {
    setPossibleAnswers((prev) =>
      prev.map((answer, i) =>
        i === index ? { ...answer, isCorrect: !answer.isCorrect } : answer
      )
    );
  };

  const handleAdd = async () => {
    const newQuestion = {
      questionType: type,
      description: questionDesc,
      points: questionPoints,
      correctAnswer: possibleAnswers.find((a) => a.isCorrect)?.text || "",
      possibleAnswers: possibleAnswers,
      quiz: qid,
    };
    const question = await quizzesClient.createQuestionForQuiz(
      qid as string,
      newQuestion
    );
    dispatch(addQuestion(question));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (qid !== "new" && question) {
      setquestionDesc(question.description);
      setquestionPoints(question.points);
      setPossibleAnswers(question.possibleAnswers);
    }
  }, []);

  return (
    <div>
      <div className="modal-body">
        <div>
          <label
            htmlFor="wd-points"
            className="text-start col-sm-2 mt-2 col-form-label"
          >
            {"Question: "}
          </label>
          <EditorProvider>
            <Editor
              className="form-control"
              value={questionDesc}
              onChange={(e) => setquestionDesc(e.target.value)}
              placeholder="Enter a MCQ question."
            />
          </EditorProvider>
        </div>
        <label
          htmlFor="wd-points"
          className="text-start col-sm-2 mt-2 col-form-label"
        >
          {"Answer: "}
        </label>
        <div className="row">
          {possibleAnswers.map((answer, index) => (
            <div key={index} className="d-flex  align-items-center mb-2">
              <input
                type="radio"
                name="correctAnswer"
                checked={answer.isCorrect}
                onChange={() => setCorrectAnswer(index)}
                className="me-2"
              />
              <input
                className="form-control"
                type="text"
                value={answer.text}
                onChange={(e) => handleInputChange(e, index)}
                placeholder={`Answer ${index + 1}`}
              />
              <FaTrash
                className="text-danger ms-2 cursor-pointer"
                onClick={() => removeAnswer(index)}
              />
            </div>
          ))}
        </div>

        <button className="btn btn-primary mt-4" onClick={addAnswer}>
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Add Answer Option
        </button>
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
          Add Question
        </button>
      </div>
    </div>
  );
}

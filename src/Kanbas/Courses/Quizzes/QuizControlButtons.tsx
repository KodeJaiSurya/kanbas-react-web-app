import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import { updateQuiz, deleteQuiz } from "./reducer";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";

export default function QuizControlButtons({
  quiz,
  deleteQuiz,
}: {
  quiz: any[];
  deleteQuiz: (quizId: string) => void;
}) {
  const { qid } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      <button className="dropwdown">
        <IoEllipsisVertical className="fs-4 float-end" />
      </button>
    </div>
  );
}

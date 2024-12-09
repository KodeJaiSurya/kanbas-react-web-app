import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function QuizControlButtons() {
  return (
    <div className="float-end">
      <input
        id="wd-quiz-progress"
        className="fs-6 rounded-5 list-assignment-progress"
        type="text"
        value="         40% of Total"
        readOnly
      />
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

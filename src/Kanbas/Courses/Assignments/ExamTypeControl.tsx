import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function ExamTypeControl() {
  return (
    <div className="d-flex align-items-center float-end">
      <div
        className="border rounded-pill border-black fs-6"
        style={{ paddingLeft: "4px", paddingRight: "4px" }}
      >
        40% of Total
      </div>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

export default function AssignmentsControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-assignment-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div
        id="wd-search-assignment"
        className="input-group border border-black"
        style={{ width: "250px" }}
      >
        <span className="input-group-text bg-white border-0">
          <IoMdSearch />
        </span>
        <input
          type="text"
          className="border-0"
          placeholder="Search..."
          style={{ width: "209px" }}
        />
      </div>
    </div>
  );
}

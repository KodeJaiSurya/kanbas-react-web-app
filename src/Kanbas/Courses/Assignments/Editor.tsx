import "./index.css";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../../store";
import { addAssignment, setAssignment, updateAssignment } from "./reducer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const assignmentList = useSelector(
    (state: state) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();
  const handleSave = () => {
    if (aid !== undefined) {
      if (!aid.localeCompare("Editor")) {
        dispatch(addAssignment({ ...assignment, course: cid }));
      } else {
        dispatch(updateAssignment(assignment));
      }
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  useEffect(() => {
    let a = { title: "NEW", description: "" };
    if (aid !== "Editor") {
      a = assignmentList.find((assignment) => assignment._id === aid);
    }
    dispatch(setAssignment(a));
  }, [aid]);
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            id="wd-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-description" className="form-label">
            Description
          </label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={10}
            cols={40}
            value={assignment.description}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              )
            }
          ></textarea>
        </div>
      </div>

      <div className="row mb-3 d-flex">
        <div className="text-end">
          <label htmlFor="wd-points" className="form-label me-3">
            Points
          </label>
          <input
            type="number"
            id="wd-points"
            className="form-control w-50 d-inline-block"
            value={assignment.points}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, points: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="row mb-3 d-flex">
        <div className="text-end">
          <label htmlFor="wd-group" className="form-label me-3">
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="assignments"
            className="form-select w-50 d-inline-block"
          >
            <option value="assignments">Assignments</option>
            <option value="quizzes">Quizzes</option>
            <option value="mid">MidTerm</option>
          </select>
        </div>
      </div>

      <div className="row mb-3 d-flex">
        <div className="text-end">
          <label htmlFor="wd-display-grade-as" className="form-label me-3">
            Display Grade as
          </label>
          <select
            defaultValue="points"
            id="wd-display-grade-as"
            className="form-select w-50 d-inline-block"
          >
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>
      </div>

      <div className="row mb-3 d-flex">
        <div className="">
          <div className="mb-3 w-50 float-end border border-black p-3 d-inline-block">
            <select id="wd-submission-type" className="form-select">
              <option value="online">Online</option>
            </select>

            <div className="mt-3">
              <label className="form-label">Online Entry Options</label>
              <div className="form-check">
                <input
                  id="wd-text-entry"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="wd-text-entry" className="form-check-label">
                  Text Entry
                </label>
              </div>

              <div className="form-check">
                <input
                  id="wd-website-url"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="wd-website-url" className="form-check-label">
                  Website URL
                </label>
              </div>

              <div className="form-check">
                <input
                  id="wd-media-recordings"
                  type="checkbox"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-media-recordings"
                  className="form-check-label"
                >
                  Media Recordings
                </label>
              </div>

              <div className="form-check">
                <input
                  id="wd-student-annotation"
                  type="checkbox"
                  className="form-check-input"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="form-check-label"
                >
                  Student Annotation
                </label>
              </div>

              <div className="form-check">
                <input
                  id="wd-file-upload"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="wd-file-upload" className="form-check-label">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
          <label
            htmlFor="wd-submission-type"
            className="form-label float-end me-3"
          >
            Submission Type
          </label>
        </div>
      </div>

      <div className="row mb-3 d-flex">
        <div className="">
          <div className="mb-3 w-50 float-end border border-black p-3 d-inline-block">
            <label htmlFor="wd-assign-to" className="form-label">
              Assign to
            </label>
            <select id="wd-assign-to" className="form-select">
              <option value="everyone">Everyone</option>
              <option value="custom">Custom</option>
            </select>
            <div className="">
              <label htmlFor="wd-due-date" className="form-label mt-3">
                Due
              </label>
              <input
                id="wd-due-date"
                className="form-control"
                type="date"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  )
                }
              />
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <input
                  id="wd-available-from"
                  className="form-control"
                  type="date"
                  value={assignment.availableDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableDate: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="col">
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                  value={assignment.dueDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>

          <label htmlFor="wd-assign-to" className="form-label float-end me-3">
            Assign
          </label>
        </div>
      </div>

      <div className="row mt-3">
        <hr />
        <div className="col text-end">
          <button
            id="wd-save-button"
            className="btn btn-success float-end"
            onClick={handleSave}
          >
            Save
          </button>

          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            id="wd-cancel-button"
            className="btn btn-secondary ms-2 me-2"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

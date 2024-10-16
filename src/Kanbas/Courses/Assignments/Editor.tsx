import "./index.css";
import { useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="wd-name" className="form-label">
            Assignment Name
          </label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment ? assignment.title : ""}
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
          >
            {assignment ? assignment.description : ""}
          </textarea>
        </div>
      </div>

      <div className="row mb-3 d-flex">
        <div className="text-end">
          <label htmlFor="wd-points" className="form-label me-3">
            Points
          </label>
          <input
            id="wd-points"
            className="form-control w-50 d-inline-block"
            value={assignment ? assignment.points : ""}
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
                defaultValue={assignment ? assignment.dueDate : ""}
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
                  defaultValue={assignment ? assignment.availableDate : ""}
                />
              </div>
              <div className="col">
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                  defaultValue={assignment ? assignment.dueDate : ""}
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
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            id="wd-save-button"
            className="btn btn-success float-end"
          >
            Save
          </Link>

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

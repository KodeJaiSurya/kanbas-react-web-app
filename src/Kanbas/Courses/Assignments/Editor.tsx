import "./index.css";
export default function AssignmentEditor() {
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
            value="A1 - ENV + HTML"
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
            The assignment is available online. Submit a link to the landing
            page of...
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
            value={100}
          />
        </div>
      </div>
      <div className="row mb-3 d-flex">
        <div className="text-end">
          <label htmlFor="wd-group" className="form-label me-3">
            Assignment Group
          </label>
          <select id="wd-group" className="form-select w-50 d-inline-block">
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
                defaultValue="2024-05-13"
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
                  defaultValue="2024-05-06"
                />
              </div>
              <div className="col">
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                  defaultValue="2024-05-20"
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
          <button id="wd-save-button" className="btn btn-success float-end">
            Save
          </button>
          <button id="ed-cancel-button" className="btn btn-secondary ms-2 me-2">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

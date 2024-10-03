import "./index.css";
export default function AssignmentEditor() {
  return (
    <div
      id="wd-assignments-editor"
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <label htmlFor="wd-name" className="form-label">
        Assignment Name
      </label>
      <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        rows={10}
        cols={40}
      >
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />

      <input
        id="wd-points"
        className="form-control float-end w-50 me-3"
        value={100}
      />
      <label
        htmlFor="wd-points"
        className="form-label float-end me-2 text-center"
      >
        Points
      </label>

      <br />
      <br />
      <br />

      <select id="wd-group" className="form-select float-end w-50 me-3">
        <option value="assignments">Assignments</option>
        <option value="quizzes">Quizzes</option>
        <option value="mid">MidTerm</option>
      </select>
      <label htmlFor="wd-group" className="form-label float-end me-2">
        Assignment Group
      </label>

      <br />
      <br />
      <br />
      <select
        id="wd-display-grade-as"
        className="form-select float-end w-50 me-3"
      >
        <option value="percentage">Percentage</option>
        <option value="points">Points</option>
      </select>
      <label
        htmlFor="wd-display-grade-as"
        className="form-label float-end me-2"
      >
        Display Grade as
      </label>

      <br />
      <br />
      <br />
      <div className="float-end w-50 me-3 border border-black">
        <select
          id="wd-submission-type"
          className="form-select w-75 ms-3 mt-3 me-3 "
        >
          <option value="online">Online</option>
        </select>
        <br />
        <div className="ms-3">
          Online Entry Options
          <br />
          <br />
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
          <br />
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
          <br />
          <div className="form-check">
            <input
              id="wd-media-recordings"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recordings
            </label>
          </div>
          <br />
          <div className="form-check">
            <input
              id="wd-student-annotation"
              type="checkbox"
              className="form-check-input"
            />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotation
            </label>
          </div>
          <br />
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
          <br />
        </div>
      </div>

      <label htmlFor="wd-submission-type" className="form-label float-end me-2">
        Submission Type
      </label>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="float-end w-50 me-3 mt-5 border border-black">
        <label htmlFor="wd-assign-to" className="form-label mt-3 ms-4">
          Assign to
        </label>
        <select id="wd-assign-to" className="form-select w-90 ms-3 mt-2 me-3 ">
          <option value="everyone">Everyone</option>
          <option value="custom">Custom</option>
        </select>

        <label htmlFor="wd-due-date" className="mt-3 ms-4">
          Due
        </label>
        <input
          id="wd-due-date"
          className="form-select w-90 ms-3 mt-2 me-3 "
          type="date"
          defaultValue="2024-05-13"
        />
        <div className="d-flex">
          <label htmlFor="wd-available-from" className="mt-3 ms-4">
            Available from
          </label>
          <span />
          <label htmlFor="wd-available-until" className="mt-3 ms-4 me-5">
            Until
          </label>
        </div>

        <div className="d-flex">
          <input
            id="wd-available-from"
            className="form-select w-40 ms-3 mt-2 me-3 "
            type="date"
            defaultValue="2024-05-06"
          />
          <input
            id="wd-available-until"
            className="form-select w-40 ms-5 mt-2 me-3"
            type="date"
            defaultValue="2024-05-20"
          />
        </div>
        <br />
      </div>
      <label htmlFor="wd-assign-to" className="form-label float-end mt-5 me-2">
        Assign
      </label>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="me-3 mt-5 ">
        <hr />

        <button className="btn btn-success float-end">Save</button>
        <button className="btn btn-secondary me-2 float-end">Cancel</button>
      </div>
    </div>
  );
}

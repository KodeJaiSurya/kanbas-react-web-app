export default function AssignmentEditor1() {
  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-md-6 d-flex float-end">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
          <input id="wd-points" className="form-control" value={100} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
          <select id="wd-group" className="form-select">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="quizzes">Quizzes</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
          <select id="wd-submission-type" className="form-select">
            <option value="online">Online</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        Online Entry Options
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
            checked={true}
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
          <label htmlFor="wd-media-recordings" className="form-check-label">
            Media Recordings
          </label>
        </div>
        <div className="form-check">
          <input
            id="wd-student-annotation"
            type="checkbox"
            className="form-check-input"
          />
          <label htmlFor="wd-student-annotation" className=" form-check-label ">
            Student Annotation
          </label>
        </div>
        <div className=" form-check ">
          <input
            id=" wd-file-upload "
            type=" checkbox "
            className=" form-check-input "
          />
          <label htmlFor=" wd-file-upload " className=" form-check-label ">
            File Uploads
          </label>
        </div>
      </div>

      <div className=" row mb-3 ">
        <div className=" col-md-6 ">
          <label htmlFor=" wd-assign-to " className=" form-label ">
            Assign To
          </label>
          <input
            id=" wd-assign-to "
            type=" text "
            value=" Everyone "
            className=" form-control "
          />
        </div>

        <div className=" col-md-6 ">
          <label htmlFor=" wd-due-date " className=" form-label ">
            Due
          </label>
          <input
            id=" wd-due-date "
            type=" date "
            defaultValue=" 2024-05-13 "
            className=" form-control "
          />
        </div>
      </div>

      <div className=" row mb-3 ">
        <div className=" col-md-6 ">
          <label htmlFor="wd-available-from " className="form-label ">
            Available from
          </label>
          <input
            id="wd-available-from "
            type="date "
            defaultValue="2024-05-06 "
            className="form-control "
          />
        </div>

        <div className="col-md-6 ">
          <label htmlFor="wd-available-until " className="form-label ">
            Until
          </label>
          <input
            id="wd-available-until"
            type="date"
            defaultValue="2024-05-20"
            className="form-control "
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4 ">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success ">Save</button>
      </div>
    </div>
  );
}

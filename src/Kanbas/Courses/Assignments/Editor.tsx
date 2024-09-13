export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={40}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="quizzes">Quizzes</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            Online Entry Options <br />
            <input id="wd-text-entry" type="checkbox" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input id="wd-website-url" type="checkbox" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input id="wd-media-recordings" type="checkbox" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input id="wd-student-annotation" type="checkbox" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input id="wd-file-upload" type="checkbox" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label>
            <br />
            <input id="wd-assign-to" type="text" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input
              id="wd-available-from"
              type="date"
              defaultValue="2024-05-06"
            />
            &nbsp;&nbsp;
            <input
              id="wd-available-until"
              type="date"
              defaultValue="2024-05-20"
            />
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td>
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

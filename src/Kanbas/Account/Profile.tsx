import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="ms-5">
      <h1>Profile</h1>
      <input
        id="wd-username"
        className="form-control mb-2"
        value="alice"
        placeholder="username"
      />
      <input
        id="wd-password"
        value="123"
        placeholder="password"
        className="form-control mb-2"
        type="password"
      />

      <input
        id="wd-firstname"
        className="form-control mb-2"
        value="Alice"
        placeholder="First Name"
      />

      <input
        id="wd-lastname"
        className="form-control mb-2"
        value="Wonderland"
        placeholder="Last Name"
      />

      <input
        id="wd-dob"
        className="form-control mb-2"
        value="2000-01-01"
        type="date"
      />

      <input
        id="wd-email"
        className="form-control mb-2"
        value="alice@wonderland"
        type="email"
      />

      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}

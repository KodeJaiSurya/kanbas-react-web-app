import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-lg-block"
    >
      <Link
        className={`list-group-item border border-0 ${
          pathname.includes("/Signin") ? "active" : ""
        }`}
        to={`/Kanbas/Account/Signin`}
      >
        Signin
      </Link>
      <Link
        className={`list-group-item border border-0 ${
          pathname.includes("/Signup") ? "active" : ""
        }`}
        to={`/Kanbas/Account/Signup`}
      >
        Signup
      </Link>
      <Link
        className={`list-group-item border border-0 ${
          pathname.includes("/Profile") ? "active" : ""
        }`}
        to={`/Kanbas/Account/Profile`}
      >
        Profile
      </Link>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-lg-block"
    >
      {links.map((link) => (
        <Link
          key={link}
          className={`list-group-item border border-0 ${
            pathname.includes(`/${link}`) ? "active" : ""
          }`}
          to={`/Kanbas/Account/${link}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

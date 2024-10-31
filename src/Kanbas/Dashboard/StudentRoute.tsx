import { useSelector } from "react-redux";
export default function StudentRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === "STUDENT") {
    return children;
  }
}

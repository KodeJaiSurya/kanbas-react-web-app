import Account from "./Account";
import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const resetCourse = () => {
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    resetCourse();
  };

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });
    resetCourse();
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Courses courses={courses} />{" "}
                  </ProtectedRoute>
                }
              />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </Session>
    </Provider>
  );
}

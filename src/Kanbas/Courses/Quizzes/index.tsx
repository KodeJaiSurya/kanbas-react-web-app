import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { setQuizzes, deleteQuiz, addQuiz } from "./reducer";
import { IoEllipsisVertical } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import QuizControlButtons from "./QuizControlButtons";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const delQuiz = async (qID: string) => {
    const dialog = window.confirm("Are you sure you want to delete this Quiz?");
    if (dialog) {
      await quizzesClient.deleteQuiz(qID);
      dispatch(deleteQuiz(qID));
    }
  };

  const getQuizStatus = (quiz: any) => {
    const currentDate = new Date();
    const startDate = new Date(quiz.availableDate);
    const dueDate = new Date(quiz.dueDate);
    if (currentDate < startDate) {
      return (
        <>
          <b>Not Available Until </b>
          {startDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}{" "}
          at 11:59 PM
        </>
      );
    }
    if (currentDate <= dueDate && currentDate >= startDate) {
      return (
        <>
          <b>Available </b>
          {startDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          })}{" "}
          at 11:59 PM
        </>
      );
    }
    return (
      <>
        <b>Closed </b>
        {startDate.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })}{" "}
        at 11:59 PM
      </>
    );
  };

  return (
    <div>
      {/* <QuizControls /> */}
      <div id="wd-assign-controls" className="text-nowrap">
        <FacultyRestrictedRoute>
          <button
            id="wd-context-menu-quiz"
            className="btn btn-lg list-assignment-progress me-1 float-end"
          >
            <IoEllipsisVertical className="fs-4" />
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor`}>
            <button
              id="wd-add-quiz-btn"
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={addQuiz}
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Quiz
            </button>
          </Link>
        </FacultyRestrictedRoute>
        <div
          id="wd-search-assignment"
          className="input-group border border-black flex-box ms-2 mt-4"
          style={{ width: "250px", height: "45px" }}
        >
          <span className="input-group-text bg-white border-0">
            <IoMdSearch />
          </span>
          <input
            type="text"
            className="border-0"
            placeholder="Search..."
            style={{ width: "209px" }}
          />
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-quizzes-list" className="list-group rounded-0">
        <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-quiz-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            <b>QUIZZES</b>
            {/* <QuizControlButtons /> */}
            <div className="float-end">
              <input
                id="wd-quiz-progress"
                className="fs-6 rounded-5 list-assignment-progress"
                type="text"
                value="         40% of Total"
                readOnly
              />
              <BsPlus className="fs-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {quizzes?.map((quiz: any) => (
              <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <GrDocumentText className="me-2 fs-3" />
                <div>
                  <a
                    className="fs-6"
                    href={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                  >
                    {quiz.title}
                  </a>
                  <p className="fs-6">
                    {getQuizStatus(quiz)} &nbsp;|&nbsp;
                    <b>Due: </b>
                    {new Date(quiz.dueDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    at 11:59 pm &nbsp;|&nbsp; {quiz.points} pts |{" "}
                    {quiz.questions} Questions
                  </p>
                </div>
                <QuizControlButtons
                  quiz={quiz}
                  deleteQuiz={(quizId) => delQuiz(quizId)}
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

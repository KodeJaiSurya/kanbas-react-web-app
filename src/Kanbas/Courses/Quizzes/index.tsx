import QuizControls from "./QuizControls";
import QuizControlButtons from "./QuizControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import FacultyRestrictedRoute from "../../FacultyRestrictedRoute";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const currentDate = new Date().toDateString();
  return (
    <div>
      <QuizControls />
      <br />
      <br />
      <ul id="wd-quizzes" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {/* <BsGripVertical className="me-2 fs-3" /> */}
            <IoMdArrowDropdown className="me-2 fs-3" />
            <b>QUIZZES</b>
            {/* <QuizControlButtons/> */}
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {quizzes
              .filter((quiz: any) => quiz.course === cid)
              .map((quiz: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <table border={0} width="100%">
                    {/* <td valign = "middle"><BsGripVertical className="me-2 fs-3" /></td> */}
                    <td valign="middle">
                      <HiOutlineRocketLaunch className="me-2 fs-3 green" />
                    </td>
                    <td>
                      <table>
                        <tr>
                          <Link
                            className="black"
                            // onClick={() => dispatch(setAssignment(assignment))}
                            to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                          >
                            {quiz.title}
                          </Link>
                        </tr>
                        <tr>
                          {" "}
                          {Date.parse(currentDate) <
                          Date.parse(quiz.start_date) ? (
                            <>
                              {" "}
                              <b>Not Available Until </b>
                              {new Date(quiz.start_date).toLocaleDateString(
                                "en-US",
                                { month: "long", day: "numeric" }
                              )}
                            </>
                          ) : Date.parse(currentDate) >
                              Date.parse(quiz.start_date) &&
                            Date.parse(currentDate) <
                              Date.parse(quiz.due_date) ? (
                            <b> Available</b>
                          ) : (
                            <b> Closed</b>
                          )}
                          &nbsp;| <b>Due </b>
                          {new Date(quiz.due_date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                          })}
                          &nbsp; at 11:59 pm | {quiz.points} pts |{" "}
                          {quiz.questions} Questions
                        </tr>
                        {/* <tr><b>Due </b> 
                      {new Date(quiz.due_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} 
                      &nbsp; at 11:59 pm | {quiz.points} pts</tr> */}
                      </table>
                    </td>
                    <td valign="middle">
                      {/* <ProtectedRouteFaculty>
                    <button id="wd-delete-assignment-btn" className="btn btn-lg me-1 float-end" 
                    data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" 
                    onClick={() => setAssignmentId(assignment._id)}>
                      <FaTrash className="text-danger me-3 mb-1 float-end" />
                      <div>{assignment._id}</div>
                    </button>
                    
                  </ProtectedRouteFaculty> */}
                      <LessonControlButtons />
                    </td>
                  </table>
                </li>
              ))}
          </ul>
        </li>
      </ul>
      {/* <DeleteAssignment dialogTitle="Delete Assignment ?" assignment_id={assignmentId}
                      deleteAssignment={(assignment_id) => {
                        dispatch(deleteAssignment(assignment_id)); 
                      }} /> */}
    </div>
  );
}

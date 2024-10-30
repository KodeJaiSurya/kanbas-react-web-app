import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ExamTypeControl from "./ExamTypeControl";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const delAssignment = (assignmentID: string) => {
    const dialog = window.confirm(
      "Are you sure you want to delete this Assignment?"
    );
    if (dialog) {
      dispatch(deleteAssignment(assignmentID));
    }
  };
  return (
    <div
      id="wd-assignments"
      style={{ marginLeft: "30px", marginRight: "30px" }}
    >
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments
            <div className="d-flex align-items-center float-end">
              <div
                className="border rounded-pill border-black fs-6"
                style={{ paddingLeft: "4px", paddingRight: "4px" }}
              >
                40% of Total
              </div>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <li className="d-flex align-items-center wd-lesson list-group-item ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <GrDocumentText className="me-2 fs-3" />
                  <div>
                    <a
                      className="wd-assignment-link fs-6"
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </a>

                    <p className="wd-assignment-text fs-6">
                      Multiple Modules | <b>Not available until</b>{" "}
                      {assignment.availableDate} at 12:00am |
                      <br />
                      <b>Due</b> {assignment.dueDate} at 11:59pm |{" "}
                      {assignment.points}pts
                    </p>
                  </div>
                  <LessonControlButtons />
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
  assignment: {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: new Date().toISOString().split("T")[0],
    availableDate: new Date().toISOString().split("T")[0],
    points: "100",
  },
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        lessons: [],
        name: assignment.name,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    setAssignment: (state, assignment) => {
      state.assignment = assignment.payload;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

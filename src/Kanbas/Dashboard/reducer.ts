import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      const { user, course, enroll } = action.payload;

      if (enroll) {
        const alreadyEnrolled = state.enrollments.some(
          (enrollment) =>
            enrollment.user === user && enrollment.course === course
        );

        if (!alreadyEnrolled) {
          state.enrollments.push({ user, course, _id: Date.now().toString() });
        }
      } else {
        state.enrollments = state.enrollments.filter(
          (enrollment) =>
            !(enrollment.user === user && enrollment.course === course)
        );
      }
    },
  },
});

export const { setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollCourse: (state, { payload: enroll }) => {
      const newCourse: any = {
        _id: new Date().getTime().toString(),
        user: enroll.user,
        course: enroll.course,
      };
      state.enrollments = [...state.enrollments, enroll] as any;
      setEnrollments(state.enrollments);
    },
    unenrollCourse: (state, { payload: unenroll }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          enrollment.course !== unenroll.course ||
          enrollment.user !== unenroll.user
      );
      setEnrollments(state.enrollments);
    },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

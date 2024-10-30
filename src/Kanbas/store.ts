import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
export interface state {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentReducer: {
    assignments: any[];
    assignment: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
  },
});
export default store;

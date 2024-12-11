import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Quiz {
  _id: string;
  title: string;
  description: string;
  points: number;
  course: string;
  questions: any;
  start_date?: string;
  due_date?: string;
  dueDate?: string;
  untilDate?: string;
  quizType?: string;
  assignmentGroup?: string;
  shuffleAnswers?: boolean;
  timeLimit?: number;
  multipleAttempts?: boolean;
  numberOfAttempts?: number;
  showCorrectAnswers?: boolean;
  accessCode?: string;
  oneQuestionAtATime?: boolean;
  webcamRequired?: boolean;
  lockQuestionsAfterAnswering?: boolean;
  availableDate?: string;
}
interface QuizzesState {
  quizzes: Quiz[];
  currentQuiz: Quiz | null;
  loading: boolean;
  error: string | null;
}
const initialState: QuizzesState = {
  quizzes: [],
  currentQuiz: null,
  loading: false,
  error: null as string | null,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const newQuiz: any = {
        // _id: new Date().getTime().toString(),
        _id: quiz._id,
        title: quiz.title,
        description: quiz.description,
        points: quiz.points,
        course: quiz.course,
        dueDate: quiz.dueDate,
        availableDate: quiz.availableDate,
        unitlDate: quiz.unitlDate,
      };
      state.quizzes = [...state.quizzes, newQuiz] as any;
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
    setCurrentQuiz: (state, action: PayloadAction<string>) => {
      state.currentQuiz =
        state.quizzes.find((quiz) => quiz._id === action.payload) || null;
      console.log(state.currentQuiz);
      state.loading = false;
      state.error = null;
    },

    updateQuizField: (
      state,
      action: PayloadAction<{ field: keyof Quiz; value: any }>
    ) => {
      if (state.currentQuiz) {
        state.currentQuiz = {
          ...state.currentQuiz,
          [action.payload.field]: action.payload.value,
        };
      }
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    clearCurrentQuiz: (state) => {
      state.currentQuiz = null;
      state.loading = false;
      state.error = null;
    },
  },
});
export const {
  addQuiz,
  deleteQuiz,
  updateQuiz,
  setQuizzes,
  setCurrentQuiz,
  updateQuizField,
  setLoading,
  setError,
  clearCurrentQuiz,
} = quizzesSlice.actions;

export const fetchQuizById = (quizId: string) => async (dispatch: any) => {
  console.log("fetchQuizById", quizId);
  try {
    dispatch(setLoading(true));
    dispatch(setCurrentQuiz(quizId));
  } catch (error) {
    dispatch(
      setError(error instanceof Error ? error.message : "An error occurred")
    );
  } finally {
    dispatch(setLoading(false));
  }
};

export default quizzesSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from "../components/Feedback/feedbackSlice";

export default configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});

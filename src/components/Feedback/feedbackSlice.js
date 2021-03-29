import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  mail: "",
  homePage: "",
  text: "",
  isError: false,
  errors: "",
  image: "",
  buttonValue: "Добавить изображение",
  nowDisplay: "startButton",
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    nameSetter: (state, action) => {
      state.name = action.payload;
    },

    mailSetter: (state, action) => {
      state.mail = action.payload;
    },

    homePageSetter: (state, action) => {
      state.homePage = action.payload;
    },

    textSetter: (state, action) => {
      state.text = action.payload;
    },

    imageSetter: (state, action) => {
      state.image = action.payload;
    },

    buttonValueSetter: (state, action) => {
      state.buttonValue = action.payload;
    },

    displaySetter: (state, action) => {
      state.nowDisplay = action.payload;
    },

    isErrorSetter: (state, action) => {
      state.isError = action.payload;
    },

    errorsSetter: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const selectFeedback = (state) => state.feedback;

export const {
  nameSetter,
  mailSetter,
  homePageSetter,
  textSetter,
  displaySetter,
  imageSetter,
  buttonValueSetter,
  isErrorSetter,
  errorsSetter,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;

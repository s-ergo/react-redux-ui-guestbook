import { memo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import {
  selectFeedback,
  nameSetter,
  mailSetter,
  homePageSetter,
  textSetter,
  isErrorSetter,
  errorsSetter,
  displaySetter,
} from "../feedbackSlice";

import handleNameValidation from "./handleNameValidation";
import handleEmailOnInput from "./handleEmailOnInput";
import handleEmailOnBlurValidation from "./handleEmailOnBlurValidation";
import handleHomePageValidation from "./handleHomePageValidation";
import handleFeedbackSend from "./handleFeedbackSend";
import handleImage from "./handleImage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 850,
    margin: "auto",
    padding: "3%",
    position: "absolute",
    top: "25%",
    left: 0,
    right: 0,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
    background: "#fff",
  },

  h2: {
    marginBottom: "5%",
  },

  closeForm: {
    position: "absolute",
    top: "2%",
    right: "1%",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  userInfo: {
    width: "32%",
  },

  feedbackTextarea: {
    width: "100%",
    margin: "4% 0",
  },

  button: {
    minWidth: "31%",
    fontSize: 12,
  },

  [theme.breakpoints.down("md")]: {
    root: {
      width: "100%",
      height: "auto",
      position: "relative",
    },

    closeForm: {
      top: "1%",
    },

    wrapper: {
      flexDirection: "column",
    },

    userInfo: {
      width: "100%",
      marginBottom: "3%",
    },

    button: {
      width: "100%",
      margin: "4% 0 1% 0",
    },
  },
}));

function Form() {
  const feedback = useSelector(selectFeedback);
  const dispatch = useDispatch();
  const classes = useStyles();
  const imageLoader = useRef(null);

  const nameHandler = (e) => {
    dispatch(nameSetter(e.target.value));
  };

  const mailHandler = (e) => {
    dispatch(mailSetter(e.target.value));
  };

  const homePageHandler = (e) => {
    dispatch(homePageSetter(e.target.value));
  };

  const textHandler = (e) => {
    dispatch(textSetter(e.target.value));
  };

  const displayHandler = (val) => {
    dispatch(displaySetter(val));
  };

  return (
    <form
      onSubmit={(e) => handleFeedbackSend(e, feedback)}
      className={classes.root}
    >
      <h2 className={classes.h2}>Мой комментарий:</h2>

      <IconButton
        aria-label="delete"
        className={classes.closeForm}
        onClick={() => displayHandler("startButton")}
      >
        <CloseIcon />
      </IconButton>

      <span className={classes.wrapper}>
        <TextField
          required
          name="name"
          id="name"
          label="Имя (на английском)"
          helperText=""
          variant="outlined"
          className={classes.userInfo}
          defaultValue={feedback.name}
          onInput={(e) => {
            handleNameValidation(e);
            nameHandler(e);
          }}
        />

        <TextField
          error={feedback.isError}
          required
          id="mail"
          name="mail"
          label="E-mail"
          className={classes.userInfo}
          defaultValue={feedback.mail}
          helperText={feedback.errors}
          variant="outlined"
          onInput={(e) => {
            handleEmailOnInput(e);
            dispatch(errorsSetter(""));
            dispatch(isErrorSetter(false));
          }}
          onBlur={(e) => {
            mailHandler(e);
            handleEmailOnBlurValidation(e, dispatch);
          }}
        />

        <TextField
          id="homePage"
          name="homePage"
          label="Моя домашняя страница"
          className={classes.userInfo}
          defaultValue={feedback.homePage}
          variant="outlined"
          onInput={(e) => handleHomePageValidation(e)}
          onBlur={(e) => homePageHandler(e)}
        />
      </span>

      <TextField
        required
        id="outlined-multiline-static"
        name="text"
        className={classes.feedbackTextarea}
        label="Текст комментария"
        multiline
        rows={8}
        defaultValue={feedback.text}
        variant="outlined"
        onBlur={(e) => textHandler(e)}
      />

      <span className={classes.wrapper}>
        <input
          hidden
          type="file"
          ref={imageLoader}
          onChange={(e) => handleImage(e, dispatch)}
        />

        <Button
          className={classes.button}
          variant="contained"
          size="small"
          onClick={(e) => imageLoader.current.click()}
        >
          {feedback.buttonValue}
        </Button>

        <Button
          className={classes.button}
          variant="contained"
          size="small"
          onClick={() => displayHandler("preview")}
        >
          Предварительный просмотр
        </Button>

        <Button
          className={classes.button}
          size="small"
          variant="contained"
          type="submit"
        >
          Опубликовать
        </Button>
      </span>
    </form>
  );
}

export default memo(Form);

import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { selectFeedback, displaySetter } from "../feedbackSlice";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import DateStreeng from "./DateStreeng";
import HomepageLink from "./HomepageLink";
import ImageTemplate from "./ImageTemplate";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "0.7%",
    listStyleType: "none",
  },

  paper: {
    width: "100%",
  },

  liContainer: {
    height: "100%",
  },

  userData: {
    padding: "2%",
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
  },

  userName: {
    marginBottom: "3%",
  },

  userFeedback: {
    padding: "2%",
  },

  userImage: {
    padding: "2%",
    margin: "auto",
    width: "100%",
    justifyContent: "center",
  },

  button: {
    marginBottom: "6%",
    fontSize: 12,
  },

  [theme.breakpoints.down("md")]: {
    userName: {
      margin: "4% 0",
    },

    userFeedback: {
      margin: "4% 0",
    },
  },
}));

function FeedbackRowPreview() {
  const feedback = useSelector(selectFeedback);
  const dispatch = useDispatch();
  const classes = useStyles();

  const displayHandler = (val) => {
    dispatch(displaySetter(val));
  };

  return (
    <li className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.liContainer}>
          <Grid item container xs={12} sm={3} className={classes.userData}>
            <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={() => displayHandler("form")}
            >
              Продолжить редактирование
            </Button>

            <div className={classes.userName}>{feedback.name}</div>
            {feedback.homePage && <HomepageLink homePage={feedback.homePage} />}
            <DateStreeng />
          </Grid>

          <Grid item xs={12} sm={5} className={classes.userFeedback}>
            {feedback.text}
          </Grid>

          <Grid item container xs={12} sm={4} className={classes.userImage}>
            {feedback.image && <ImageTemplate src={feedback.image} />}
          </Grid>
        </Grid>
      </Paper>
    </li>
  );
}

export default memo(FeedbackRowPreview);

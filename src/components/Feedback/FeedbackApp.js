import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { selectFeedback } from "./feedbackSlice";
import Form from "./Form/Form";
import FeedbackPreview from "./FeedbackPreview/FeedbackRowPreview";
import StartButton from "./StartButton/StartButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3%",
  },
  h1: {
    fontSize: "2em",
    margin: "40px 3% 10px 3%",
  },
}));

function FeedbackApp() {
  const classes = useStyles();
  const feedback = useSelector(selectFeedback);

  return (
    <div className="App">
      <Typography variant="h1" className={classes.h1}>
        Гостевая книга
      </Typography>

      <main className={classes.root}>
        {feedback.nowDisplay === "startButton" && <StartButton />}
        {feedback.nowDisplay === "form" && <Form />}
        <ul>{feedback.nowDisplay === "preview" && <FeedbackPreview />}</ul>
      </main>
    </div>
  );
}

export default FeedbackApp;

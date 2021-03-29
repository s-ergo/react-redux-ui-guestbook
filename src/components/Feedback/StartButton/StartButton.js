import { memo } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import { displaySetter } from "../feedbackSlice";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    right: "4%",
    bottom: "4%",
  },
}));

function StartButton() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDisplayHandler = (form) => {
    dispatch(displaySetter(form));
  };

  return (
    <Button
      className={classes.root}
      variant="contained"
      startIcon={<EditIcon />}
      color="primary"
      onClick={() => onDisplayHandler("form")}
    >
      Мой отзыв
    </Button>
  );
}

export default memo(StartButton);

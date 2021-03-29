import axios from "axios";
import { mailSetter, isErrorSetter, errorsSetter } from "../feedbackSlice";

const handleEmailOnBlurValidation = (e, dispatch) => {
  const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  if (e.target.value === "") return false;

  if (!e.target.value.match(reg) && e.target.value !== "") {
    dispatch(errorsSetter("Введите правильный email"));
    dispatch(isErrorSetter(true));
    return false;
  }

  const checkingMailOriginality = async () => {
    axios
      .post("http://reactgb:8000/check", { mail: e.target.value })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        if (res.data !== 0) {
          dispatch(
            errorsSetter("Вы уже комментировали. Допустим только один отзыв!")
          );
        } else {
          dispatch(mailSetter(e.target.value));
        }
      });
  };
  checkingMailOriginality();
};

export default handleEmailOnBlurValidation;

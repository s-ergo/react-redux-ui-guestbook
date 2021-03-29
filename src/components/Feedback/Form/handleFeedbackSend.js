import axios from "axios";

const handleFeedbackSend = async (e, feedback) => {
  e.preventDefault();

  if (
    !feedback.name ||
    !feedback.mail ||
    !feedback.feedback ||
    feedback.isError
  ) {
    return;
  }

  axios
    .post("/add", {
      data: {
        name: feedback.name,
        mail: feedback.mail,
        page: feedback.homePage,
        feedback: feedback.feedback,
        image: feedback.image,
      },
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((res) => {
      document.location.href = "/";
    });
};

export default handleFeedbackSend;

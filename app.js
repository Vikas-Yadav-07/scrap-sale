const userDataSubmitKey = document.querySelector(".submit-btn");
const user_name = document.querySelector("#user-name");
const message = document.querySelector("#user-message");
const user_email = document.querySelector("#user-email");
const user_contact = document.querySelector("#user-phone");

const sendEmail = async (e) => {
  e.preventDefault();
  const params = {
    service_id: "service_431ivto",
    user_id: "_pOcLctYnnEKMmvc4",
    template_id: "template_bmuj0fh",
    template_params: {
      user_name: user_name.value,
      user_email: user_email.value,
      message: message.value,
      user_contact: user_contact.value,
    },
  };
   fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

userDataSubmitKey.addEventListener("click", sendEmail);

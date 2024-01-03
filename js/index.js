const FORM = document.getElementById("form");
const ERROR = document.querySelector(".form_error");
const THAKS = document.querySelector(".thanks");
const DESCRIPTION = document.querySelector(".main");
const INPUT = document.querySelector(".form_email");
const VALIDATION = document.querySelector(".validation-email");

function handleSubmit(e) {
  e.preventDefault();

  const email = e.target.elements.email.value;

  const result = { Email: email };

  if (email !== "") {
    THAKS.style.display = "block";
    DESCRIPTION.style.display = "none";
    VALIDATION.innerHTML = email;
    console.log(result);
    FORM.reset();
  } else {
    ERROR.style.display = "block";
    INPUT.style.border = "1px solid hsl(4, 100%, 67%)";
    INPUT.style.backgroundColor = "#fac2c273";
    THAKS.style.display = "none";
  }
}

function dismiss() {
  THAKS.style.display = "none";
  DESCRIPTION.style.display = "";
  ERROR.style.display = "none";
  INPUT.style.border = "1px solid hsl(231, 7%, 60%)";
  INPUT.style.backgroundColor = "";
}

FORM.addEventListener("submit", handleSubmit);
THAKS.addEventListener("click", dismiss);

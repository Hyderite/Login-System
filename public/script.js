const password0 = document.querySelector("#pw")

function authPw() {
  if (password0.value === "1234") {
    window.open("https://google.com");
  } else {
    alert("You entered the wrong password. Maybe try again?");
  }
}
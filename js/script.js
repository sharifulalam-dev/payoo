const loginBtn = document.getElementById("login-button");
const phoneNumber = document.querySelector(".phone-number");
const pinNumber = document.querySelector(".pin-number");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userNumber = phoneNumber.value;
  let userPass = pinNumber.value;

  if (userNumber === "017" && userPass === "123") {
    window.location.href = "/home.html";
  } else {
    alert("Enter Correct Phone Number and Password");
  }
});

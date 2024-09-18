const loginBtn = document.getElementById("login-button");
const phoneNumber = document.querySelector(".phone-number");
const pinNumber = document.querySelector(".pin-number");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(phoneNumber.value);
});

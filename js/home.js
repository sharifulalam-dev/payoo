const addMoneyBtn = document.querySelector(".button-addmoney");
const addMoneyPin = document.querySelector(".pin-addmoney");
const inputUserAmount = document.querySelector(".amount-addmoney");
const totalAmount = document.querySelector(".stat-value");
const outMoneyBtn = document.querySelector(".button-outmoney");
const addMoney = document.querySelector(".addMoney");
const outMoney = document.querySelector(".outMoney");
const outMoneyAmount = document.querySelector(".amount-outmoney");
const outMoneyPin = document.querySelector(".pin-outmoney");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

addMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentTotal = +totalAmount.innerText;
  let userInput = +inputUserAmount.value;

  if (addMoneyPin.value === "123") {
    const newTotal = currentTotal + userInput;

    totalAmount.textContent = newTotal;

    outMoneyAmount.value = "";
    outMoneyPin.value = "";
  }
});

outMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentTotal = +totalAmount.innerText;
  let userInput = +outMoneyAmount.value;

  if (outMoneyPin.value === "123") {
    const newTotal = currentTotal - userInput;

    totalAmount.textContent = newTotal;

    outMoneyAmount.value = "";
    outMoneyPin.value = "";
  }
});

outMoney.addEventListener("click", () => {
  card1.classList.add("hidden");
  card2.classList.remove("hidden");
});

addMoney.addEventListener("click", () => {
  card1.classList.remove("hidden");
  card2.classList.add("hidden");
});

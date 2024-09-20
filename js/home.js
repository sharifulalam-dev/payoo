function getItemValue(item) {
  return document.querySelector(item);
}

const addMoneyBtn = getItemValue(".button-addmoney");
const addMoneyPin = getItemValue(".pin-addmoney");
const inputUserAmount = getItemValue(".amount-addmoney");
const totalAmount = getItemValue(".stat-value");
const outMoneyBtn = getItemValue(".button-outmoney");
const addMoney = getItemValue(".addMoney");
const outMoney = getItemValue(".outMoney");
const outMoneyAmount = getItemValue(".amount-outmoney");
const outMoneyPin = getItemValue(".pin-outmoney");
const card1 = getItemValue(".card-1");
const card2 = getItemValue(".card-2");
const transferBtn = getItemValue(".transfer-btn");
const transactionHistory = getItemValue(".transaction-history");

addMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let currentTotal = +totalAmount.innerText;
  let userInput = +inputUserAmount.value;

  if (addMoneyPin.value === "123") {
    const newTotal = currentTotal + userInput;

    totalAmount.textContent = newTotal;
    const p = document.createElement("p");
    p.innerText = `Added : ${userInput} and New Balance is ${newTotal}`;
    transactionHistory.appendChild(p);

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

    const div = document.createElement("div");

    div.classList.add("bg-yellow-500", "mt-4", "p-2");
    div.innerHTML = `<h3 class="font-bold text-2xl">Cash Out</h3>
    <p>Deduct : ${userInput} and New Balance is ${newTotal}</p>`;
    transactionHistory.appendChild(div);

    outMoneyAmount.value = "";
    outMoneyPin.value = "";
  }
});

outMoney.addEventListener("click", () => {
  console.log(card2);
  showItem(card2);
});

addMoney.addEventListener("click", () => {
  console.log(card1);
  showItem(card1);
});

transferBtn.addEventListener("click", () => {
  showItem(transactionHistory);
});

function showItem(id) {
  card1.classList.add("hidden");
  card2.classList.add("hidden");
  transactionHistory.classList.add("hidden");

  id.classList.remove("hidden");
}

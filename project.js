let currentValue = "";
let previousValue = "";
let operationType = undefined;
const operators = { add: "+", substract: "-", multiply: "*", divide: "/" };
const displayPreviousValue = document.getElementById("previous-value");
const displayCurrentValue = document.getElementById("current-value");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => addNumber(btn.innerHTML));
});

function addNumber(num) {
  if (num === "." && currentValue.includes(".")) return;
  currentValue = currentValue.toString() + num.toString();
  printValues();
}

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", () => operatorCalculate(btn.value));
});
function operatorCalculate(type) {
  operationType !== "equals" && calculate();
  operationType = type;
  previousValue = currentValue || previousValue;
  currentValue = "";
  printValues();
}

function calculate() {
  previousValue = parseFloat(previousValue);
  currentValue = parseFloat(currentValue);

  if (isNaN(currentValue) || isNaN(previousValue)) return;
  currentValue = operation(previousValue, currentValue);
}
function operation(previousValue,currentValue){
if (operationType== 'add') return previousValue+currentValue;
if (operationType== 'substract') return previousValue-currentValue;
if (operationType== 'multiply') return previousValue*currentValue;
if (operationType== 'divide') return previousValue/currentValue;
}

function deleteAll() {
  currentValue = "";
  previousValue = "";
  operationType = undefined;
  printValues();
}

function deleteLast() {
  currentValue = currentValue.toString().slice(0, -1);
  printValues();
}

function printValues() {
  displayCurrentValue.textContent = currentValue;
  displayPreviousValue.textContent = `${previousValue} ${
    operators[operationType] || ""
  }`;
}

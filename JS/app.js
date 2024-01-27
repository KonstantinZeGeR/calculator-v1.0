const resultElement = document.getElementById("result");
const inp1 = document.getElementById("input1");
const inp2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const umnBtn = document.getElementById("umn");
const delBtn = document.getElementById("del");

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
umnBtn.onclick = function () {
  action = "*";
};
delBtn.onclick = function () {
  action = "/";
};

function printResult(result) {
  resultElement.style.color = result > 0 ? "green" : "red";
  resultElement.textContent = result;
}

function computeNumberWitchAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol === "+") return num1 + num2;
  else if (actionSymbol === "-") return num1 - num2;
  else if (actionSymbol === "*") return num1 * num2;
  else if (actionSymbol === "/")
    return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
}

submitBtn.onclick = function () {
  const result = computeNumberWitchAction(input1, input2, action);
  printResult(result);
};

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, op, b) {
  switch (op) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return substract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      console.log("Not an operand.");
  }
}
const display = document.querySelector("#display");
const numButton = document.querySelectorAll(".number");
let number = null;
let operator = null;
let number2 = null;

numButton.forEach((button) =>
  button.addEventListener("click", () => {
    display.textContent = display.textContent.concat(button.textContent);
    if (operator === null) number = Number(display.textContent);
    else number2 = Number(display.textContent);
  })
);

const opButton = document.querySelectorAll(".operator");

opButton.forEach((button) =>
  button.addEventListener("click", () => {
    operator = button.textContent;
    display.textContent = "";
  })
);

const equal = document.querySelector("#\\=");
equal.addEventListener("click", () => {
  display.textContent = operate(number, operator, number2).toString();
  number = Number(display.textContent);
  operator = null;
  number2 = null;
});

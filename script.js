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

let num1;
let op;
let num2;

function operate(a, op, b) {
  switch (op) {
    case "+":
      add(a, b);
      break;
    case "-":
      substract(a, b);
      break;
    case "*":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
    default:
      console.log("Not an operand.");
  }
}

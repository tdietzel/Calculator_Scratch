function add (x,y) {
  return x + y;
}

function subtract (x,y) {
  return x - y;
}

function multiply (x,y) {
  return x * y;
}

function divide (x,y) {
  return x / y;
}

function calculate (e) {
  e.preventDefault();
  let x = parseInt(document.querySelector("#number1").value);
  let y = parseInt(document.querySelector("#number2").value);
  let op = document.querySelector("input[name='operator']:checked").value;

  let answer;
  if (x && y) {
    if (op === 'add') {
        answer = add(x,y);
    } else if (op === 'subtract') {
        answer = subtract(x,y);
    } else if (op === 'multiply') {
        answer = multiply(x,y);
    } else if (op === 'divide') {
        answer = divide(x,y);
    }
    document.querySelector("#displayResult").innerText = answer;

  }
}

window.addEventListener("load", () => {
    let form = document.querySelector("#calculator");
    form.addEventListener("submit" , calculate);
    console.log("test1");
  });
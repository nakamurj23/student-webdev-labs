// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let button = document.querySelector("#copy");
let output = document.querySelector(".output");
// add an event listener on the target element
button.addEventListener("click", handleClick);
// callback function to handle event
function handleClick() {
  output.append(userInput.value);
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");
let outputLabel = document.querySelector("#inputEventExample");
const newOutput = document.createElement("div");
//newOutput.setAttribute("class", "output");
outputLabel.append(newOutput);
// add an event listener on the target element
userInput2.addEventListener("input", onInput);
// callback function to handle event
function onInput() {
  newOutput.textContent = userInput2.value;
}

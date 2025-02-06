// Get references to the HTML elements
const inputField = document.getElementById("numberInput");
const button = document.getElementById("calculateBtn");
const resultParagraph = document.getElementById("result");

// Add an event listener to the button
button.addEventListener("click", function () {
  // Get the number from the input field
  const num = parseFloat(inputField.value);

  // Calculate the square
  const square = num * num;

  // Display the result in bold
  resultParagraph.innerHTML = `<strong>Square of ${num} is ${square}</strong>`;
});

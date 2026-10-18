// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightgreen' // Implement the function to change background color
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white' // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const display = document.getElementById("keyPressDisplay");
  display.textContent = `Key pressed: ${event.key}`;
  document.addEventListener('keydown', displayKeyPress)
}
// Process Text Input
// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const userInput = document.getElementById("textInput").value;
  const display = document.getElementById("textInputDisplay");
  display.textContent = `You typed: ${userInput}`; 
}


// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
    const changeButton = document.getElementById("changeColorButton");
    if (changeButton) {
      changeButton.addEventListener('click', changeBackgroundColor);
    }
    
  // Attach event listener to reset background color when the body is double-clicked

    const resetButton = document.getElementById("resetColorButton");
    if (resetButton) {
      resetButton.addEventListener("dblclick", resetBackgroundColor);
    }
// Attach event listener to display key pressed when a key is pressed down
  const keyPressed = document.getElementById("keyPressDisplay");
  if (keyPressed) {
    keyPressed.addEventListener('keydown', displayKeyPress);
  }
// Attach event listener to display user input in real-time as they type
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}
// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
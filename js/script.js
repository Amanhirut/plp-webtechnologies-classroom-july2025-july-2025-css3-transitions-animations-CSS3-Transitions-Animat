
// Part 2: Functions Demo


// Global variable (scope demo)
let globalMultiplier = 2;

// Function with parameter + return value
function doubleValue(num) {
  // Local variable
  let result = num * globalMultiplier;
  return result;
}

// Function that updates DOM (reusable logic)
function updateResult(message) {
  document.getElementById("calcResult").textContent = message;
}

// Event listener for calculation button
document.getElementById("calcBtn").addEventListener("click", function() {
  let number = 5; // Example input
  let doubled = doubleValue(number);
  updateResult(`Double of ${number} is ${doubled}`);
});


// Part 3: CSS + JS Combined

const animateBtn = document.getElementById("animateBtn");
const box = document.querySelector(".box-to-animate");

animateBtn.addEventListener("click", () => {
  // Toggle the animation class dynamically
  box.classList.toggle("animate");
});

// Function to update the time
function updateClock() {
  const now = new Date(); // Get the current date and time
  // Format the time nicely (e.g., "10:30:55 AM")
  const formattedTime = now.toLocaleTimeString();

  // Get the HTML element by its ID
  const clockElement = document.getElementById("clock-display");

  // Update the content of the element
  if (clockElement) {
    clockElement.textContent = formattedTime;
  }
}

// Call the updateClock function immediately to display the time on load
updateClock();

// Set an interval to call updateClock() every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

//
// Getting today items arrow
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const itemCards = document.getElementById("itemCards");

// Scroll Left (Go back)
rightArrow.addEventListener("click", () => {
  itemCards.scrollBy({
    left: -200, // Negative number moves content to the left
    behavior: "smooth",
  });
});

// Scroll Right (Go forward)
leftArrow.addEventListener("click", () => {
  itemCards.scrollBy({
    left: 200, // Positive number moves content to the right
    behavior: "smooth",
  });
});

// Getting Category Cards
const leftCategoryArrow = document.getElementById("leftArrow2");
const rightCategoryArrow = document.getElementById("rightArrow2");
const itemCategoriesDiv = document.getElementById("itemCategoriesDiv");

leftCategoryArrow.addEventListener("click", () => {
  itemCategoriesDiv.scrollBy({
    left: -100,
    behavior: "smooth",
  });
});

rightCategoryArrow.addEventListener("click", () => {
  itemCategoriesDiv.scrollBy({
    left: 100,
    behavior: "smooth",
  });
});

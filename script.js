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

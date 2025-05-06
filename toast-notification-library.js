// Shorthand for the body
const body = document.body;

// This function takes in a message, an element to attach to, and the time the popup should last for and creates a toast
function createToast(message, elementToAttach = body, removeTime = 5000) {
  // Create a new div element
  const toastEl = document.createElement("div");
  // Add the class 'toast' to the div element
  toastEl.classList.add("toast");

  // Create a heading element
  const writing = document.createElement("h4");
  // The heading should display the text passed in
  writing.textContent = message;

  // Append the heading to the toast div...
  toastEl.appendChild(writing);
  // ..And then attach the toast to the element it should attach to with the default being body.
  elementToAttach.appendChild(toastEl);

  // This function animates the toasts exit as well as removes it fro the DOM
  animateExit("out-effect", toastEl, 1000, removeTime);
}

// Give a class name, element, time the effect should last, and the time until the toast should be removed, create the JavaScript to create the animation
function animateExit(effectClassName, element, timeOfEffect, timeToRemove) {
  setTimeout(() => {
    // Add the effect class to the element
    element.classList.add(effectClassName);

    // It should start before the time to remove so that there is exactly enough time for the effect
  }, timeToRemove - timeOfEffect);

  setTimeout(() => {
    // Finally, when the effect is done, remove the element
    element.remove();
  }, timeToRemove);
}

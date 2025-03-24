const body = document.body;

function createToast(message, elementToAttach = body, removeTime = 5000) {
  const toastEl = document.createElement("div");
  toastEl.classList.add("toast");
  const writing = document.createElement("h4");
  writing.textContent = message;
  toastEl.appendChild(writing);
  elementToAttach.appendChild(toastEl);

  setTimeout(() => {
    toastEl.remove();
  }, removeTime);
}

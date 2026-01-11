function unlock() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === "vibha") {
    window.location.href = "beginning.html";
  } else {
    error.innerText = "Not for everyone 🤍";
  }
}

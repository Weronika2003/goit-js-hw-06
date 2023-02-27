const inputText = document.querySelector("#validation-input");
const inputLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", () => {
  if (parseInt(inputLength) === inputText.value.trim().length) {
    inputText.classList.add("valid").remove("invalid");
  } else {
    inputText.classList.add("invalid").remove("valid");
  }
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//nameInput.addEventListener("input", (event) =>{
//nameOutput.textContent = event.currentTarget.value;
//});
nameInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    return (nameOutput.textContent = event.currentTarget.value);
  } else {
    nameOutput.textContent = "Anonymous";
  }
});

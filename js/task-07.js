const fontSizeControl = document.querySelector("#font-size-control");
const controledText = document.querySelector("#text");
controledText.style.fontSize = fontSizeControl.value;

fontSizeControl.addEventListener("input", (event) => {
  controledText.style.fontSize = event.currentTarget.value + "px";
});

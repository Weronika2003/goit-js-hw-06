function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const bgBodyColor = document.querySelector("body");
const widget = document.querySelector(".widget");
const inColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", (e) =>{
  const randomColor = getRandomHexColor();
  bgBodyColor.style.backgroundColor = randomColor;
  inColor.textContent = randomColor;
});

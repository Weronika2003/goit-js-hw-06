const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const showCounter = document.querySelector("#value");
let counterValue = parseInt(showCounter.innerText);

const detract = () => {
 counterValue -= 1,
  showCounter.textContent = `${counterValue}`;
}

const add = () => {
  counterValue += 1,
  showCounter.textContent = `${counterValue}`;
}

btnDecrement.addEventListener("click", detract);
btnIncrement.addEventListener("click", add);
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const showCounter = document.querySelector("#value");
let counterValue = 0;

const detract = () => {
  return (counterValue = counterValue - 1), console.log(counterValue);
};

btnDecrement.addEventListener("click", detract);

const add = () => {
  return (counterValue = counterValue + 1), console.log(counterValue);
};
btnIncrement.addEventListener("click", add);

showCounter.textContent = counterValue;
// cos mi tu nie dziala i nie wiem co zrobic zeby wyswietlalo na stronie numer (zmienialo 0)
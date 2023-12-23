const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');


let counter = 0;


function updateCounterValue(value) {
  counterValue.textContent = value;
}


decrementBtn.addEventListener('click', () => {
  counter -= 1;
  updateCounterValue(counter);
});

incrementBtn.addEventListener('click', () => {
  counter += 1;
  updateCounterValue(counter);
});
